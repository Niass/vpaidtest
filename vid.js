/*
 *@fileoverview A VPAID ad useful for testing functionality of the sdk.
 * This particular ad will just play a video.
 *
 */

/**
 * @constructor
 */
var VpaidVideoPlayer = function () {
  this.slot_ = null;

  /**
   * The video slot is the video element used by the ad to render video content.
   * @type {Object}
   * @private
   */
  this.videoSlot_ = null;

  /**
   * An object containing all registered events.  These events are all
   * callbacks for use by the vpaid ad.
   * @type {Object}
   * @private
   */
  this.eventsCallbacks_ = {};

  /**
   * A list of getable and setable attributes.
   * @type {Object}
   * @private
   */
  this.attributes_ = {
    companions: '',
    desiredBitrate: 256,
    duration: 30,
    expanded: false,
    height: 0,
    icons: '',
    linear: true,
    remainingTime: 10,
    skippableState: false,
    viewMode: 'normal',
    width: 0,
    volume: 1.0,
  };

  /**
   * A set of events to be reported.
   * @type {Object}
   * @private
   */
  this.quartileEvents_ = [
    { event: 'AdVideoStart', value: 0 },
    { event: 'AdVideoFirstQuartile', value: 25 },
    { event: 'AdVideoMidpoint', value: 50 },
    { event: 'AdVideoThirdQuartile', value: 75 },
    { event: 'AdVideoComplete', value: 100 },
  ];

  /**
   * @type {number} An index into what quartile was last reported.
   * @private
   */
  this.lastQuartileIndex_ = 0;

  /**
   * An array of urls and mimetype pairs.
   *
   * @type {!object}
   * @private
   */
  this.parameters_ = {};
};

/**
 * VPAID defined init ad, initializes all attributes in the ad.  The ad will
 * not start until startAd is called.
 *
 * @param {number} width The ad width.
 * @param {number} height The ad heigth.
 * @param {string} viewMode The ad view mode.
 * @param {number} desiredBitrate The desired bitrate.
 * @param {Object} creativeData Data associated with the creative.
 * @param {Object} environmentVars Variables associated with the creative like
 *     the slot and video slot.
 */
VpaidVideoPlayer.prototype.initAd = function (
  width,
  height,
  viewMode,
  desiredBitrate,
  creativeData,
  environmentVars
) {
  // slot and videoSlot are passed as part of the environmentVars
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.attributes_['desiredBitrate'] = desiredBitrate;
  this.slot_ = environmentVars.slot;
  this.videoSlot_ = environmentVars.videoSlot;
  console.log('environmentVars**', environmentVars);

  // Parse the incoming parameters.
  this.parameters_ = JSON.parse(creativeData['AdParameters']);

  console.log('**width', width);
  console.log('**height', height);
  console.log('$**this.parameters_', this.parameters_);
  this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);
  this.updateVideoSlot_();
  this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false);
  this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false);
  this.callEvent_('AdLoaded');
};

/**
 * Called when the overlay is clicked.
 * @private
 */
VpaidVideoPlayer.prototype.overlayOnClick_ = function () {
  this.callEvent_('AdClickThru');
};

/**
 * Called by the video element.  Calls events as the video reaches times.
 * @private
 */
VpaidVideoPlayer.prototype.timeUpdateHandler_ = function () {
  console.log('timeUpdateHandler_ called!!!');
  if (this.lastQuartileIndex_ >= this.quartileEvents_.length) {
    return;
  }
  var percentPlayed = (this.videoSlot_.currentTime * 100.0) / this.videoSlot_.duration;
  if (percentPlayed >= this.quartileEvents_[this.lastQuartileIndex_].value) {
    var lastQuartileEvent = this.quartileEvents_[this.lastQuartileIndex_].event;
    this.eventsCallbacks_[lastQuartileEvent]();
    this.lastQuartileIndex_ += 1;
  }
};

/**
 * @private
 */
VpaidVideoPlayer.prototype.updateVideoSlot_ = function () {
  if (this.videoSlot_ == null) {
    this.videoSlot_ = document.createElement('video');
    this.log('Warning: No video element passed to ad, creating element.');
    this.slot_.appendChild(this.videoSlot_);
  }
  this.updateVideoPlayerSize_();
  var foundSource = false;
  var videos = this.parameters_.mediaFiles || [];
  for (var i = 0; i < videos.length; i++) {
    // Choose the first video with a supported mimetype.
    if (this.videoSlot_.canPlayType(videos[i].type) != '') {
      this.videoSlot_.setAttribute('src', videos[i].uri);
      foundSource = true;
      break;
    }
  }
  if (!foundSource) {
    console.log('didnt find any source');
    // Unable to find a source video.
    this.callEvent_('AdError');
  }
};

/**
 * Helper function to update the size of the video player.
 * @private
 */
VpaidVideoPlayer.prototype.updateVideoPlayerSize_ = function () {
  this.videoSlot_.setAttribute('width', this.attributes_['width']);
  this.videoSlot_.setAttribute('height', this.attributes_['height']);
};

/**
 * Returns the versions of vpaid ad supported.
 * @param {string} version
 * @return {string}
 */
VpaidVideoPlayer.prototype.handshakeVersion = function (version) {
  return '2.0';
};

/**
 * Called by the wrapper to start the ad.
 */
VpaidVideoPlayer.prototype.startAd = function () {
  this.log('Starting ad');
  this.videoSlot_.play();
  var img = document.createElement('img');
  var div = document.createElement('div');
  div.classList.add('blink-square');
  div.style.width = '30px';
  div.style.height = '30px';
  var squareColor = this.parameters_.color || '';
  div.style.border = `1px solid ${squareColor}`;
  div.style.backgroundColor = squareColor;
  img.src = this.parameters_.overlay || '';
  console.log('this.parameters_.overlay', this.parameters_.overlay);
  this.slot_.appendChild(div);
  this.slot_.appendChild(img);

  function prepareFrame() {
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute(
      'src',
      'https://creative.bliink.io/easyjet_promojanvier_launch_fullswitch/launch/index.html?click=https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=C0y0xp3jyYZuIN4iUb_fUmOgPltrEhWjBraimxA-poorAyS4QASDyoukmYPv5_IKICsgBCakCJYV5g2rRsj6oAwGqBOEBT9Aw5eHU1OtQxSevzp3qt2-scPU8Ktq2ZzgByv3KQ0viEtBvu7HK3QE-ggPs-V9qTp6jJQzS41xJgv9YyquwdNspJo3GzGHHdlaOtTPOtph7WZj56M0hMzcUUQYSAj3_K5M7mx6N84NYN5IOv541-xMwDRkntkzGgez0G-OMwQFhi64XBQTyvTVjE9cXlTAa7sqpDCOC9qv2A-GepJe0A5nFJR5YWiO2wTXJBuODnXn1O3ajyxUl_AIVYGEYCJP_LuRy1JjqwSGIEfsTG0lERXCUEEb7xX0s6g3B8C-1sWodwASShuGt7APgBAOQBgGgBk2AB8uznzeoB47OG6gHk9gbqAfulrECqAf-nrECqAfVyRuoB6a-G6gH89EbqAeW2BuoB6qbsQKoB9-fsQLYBwDSCAkIgOGAEBABGB_yCA1iaWRkZXItMjkzNTM1gAoEmAsByAsBgAwBsBOf24QO2BMD2BQB0BUB-BYBgBcB&ae=1&num=1&cid=CAASEuRodFw88cCiAMubeq3NFwAbGg&sig=AOD64_3v57WnA8-KKDzGnZkAlkkb5Ky2Dw&client=ca-pub-6068497455919343&dbm_c=AKAmf-AyUkRYYjp7e7Q78htXpzNYFN81WIzJQ5zKw7_VubVJ6yEi8SwtTwsqzxFaJBaa2kTKO2CbrVZJtY_2ChUE7AbACnH4zg4eT4f4n-gzcmaDazCRh1xjhpks1YZrHrGN5VolUp3LUES-GjS1QDqjAFTZPoGPEQ&dbm_d=AKAmf-DnoJOjdm-7nB73s6emZqpzYg3SjMqaY-D-K_rQHmPuQB2xM6OHG2rSH31IK-Z9DBVNXJWGifM721jmjq-7wJISxr35auJl_lZJWnzehv9KlJgCy_u6IKJWaWSB_zfigrXavGp2ZTZXlkQBkeLdweBoe-GMw0cJI-bJPW3uRmqTNwaXflw5PGYfR5WpgGz7iZ_g8c8j-1E6jRi231qhYQBHEZJxDKLEykqmq4VI3CVfLSXOuCoxI_NKT9JikB5QJBhG88ygyegH-BJ_yqdIQbl02Q7oW_DcsQg9bjIlHjT9MJG1S4IMSKYS0FlkuBhD178MQySEJK_k1bEIYuKyDCCu6Eg--2kirTJcB6EYLByev3p7_S_k8roNQ3IGeYVS4wf6sw90vBhsUIZGLNmvhV55xf0Kx3G1w0QVFjdMRYx3V28AgVY56_sxSWARAWLuid2duW1Wzv3FQa4PeE5AZJwuFgfWeyE1E6BChUJXHBPqwOU6r0ofBvQ8usyfy6ekQ3cBMbS1yCiH7FwvmRdeQXb2_1sNOcDWxd6kl9iKCDptKM7GbSn5JXc8Au0hmapcHf_seSii&adurl='
    );
    ifrm.style.width = '150px';
    ifrm.style.height = '150px';
    this.slot_.appendChild(ifrm);
  }
  prepareFrame();
  console.log('pass ?????');
  img.addEventListener('click', this.overlayOnClick_.bind(this), false);

  //add a test mute button
  // var muteButton = document.createElement('input');
  // muteButton.setAttribute('type', 'button');
  // muteButton.setAttribute('value', 'mute/unMute');

  // muteButton.addEventListener('click', this.muteButtonOnClick_.bind(this), false);
  // this.slot_.appendChild(muteButton);

  this.callEvent_('AdStarted');
};

/**
 * Called by the wrapper to stop the ad.
 */
VpaidVideoPlayer.prototype.stopAd = function () {
  this.log('Stopping ad');
  // var square = this.slot_.querySelector('.blink-square')
  // console.log('square***', square);
  // square.remove()
  // console.log('should remove square***');
  // Calling AdStopped immediately terminates the ad. Setting a timeout allows
  // events to go through.
  var callback = this.callEvent_.bind(this);
  setTimeout(callback, 75, ['AdStopped']);
};

/**
 * @param {number} value The volume in percentage.
 */
VpaidVideoPlayer.prototype.setAdVolume = function (value) {
  this.attributes_['volume'] = value;
  this.log('setAdVolume ' + value);
  this.callEvent_('AdVolumeChange');
};

/**
 * @return {number} The volume of the ad.
 */
VpaidVideoPlayer.prototype.getAdVolume = function () {
  this.log('getAdVolume');
  return this.attributes_['volume'];
};

/**
 * @param {number} width The new width.
 * @param {number} height A new height.
 * @param {string} viewMode A new view mode.
 */
VpaidVideoPlayer.prototype.resizeAd = function (width, height, viewMode) {
  console.log('resizeAd called !!!');
  this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.updateVideoPlayerSize_();
  this.callEvent_('AdSizeChange');
};

/**
 * Pauses the ad.
 */
VpaidVideoPlayer.prototype.pauseAd = function () {
  this.log('pauseAd');
  this.videoSlot_.pause();
  this.callEvent_('AdPaused');
};

/**
 * Resumes the ad.
 */
VpaidVideoPlayer.prototype.resumeAd = function () {
  this.log('resumeAd');
  this.videoSlot_.play();
  this.callEvent_('AdResumed');
};

/**
 * Expands the ad.
 */
VpaidVideoPlayer.prototype.expandAd = function () {
  this.log('expandAd');
  this.attributes_['expanded'] = true;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
  this.callEvent_('AdExpanded');
};

/**
 * Returns true if the ad is expanded.
 * @return {boolean}
 */
VpaidVideoPlayer.prototype.getAdExpanded = function () {
  this.log('getAdExpanded');
  return this.attributes_['expanded'];
};

/**
 * Returns the skippable state of the ad.
 * @return {boolean}
 */
VpaidVideoPlayer.prototype.getAdSkippableState = function () {
  this.log('getAdSkippableState');
  return this.attributes_['skippableState'];
};

/**
 * Collapses the ad.
 */
VpaidVideoPlayer.prototype.collapseAd = function () {
  this.log('collapseAd');
  this.attributes_['expanded'] = false;
};

/**
 * Skips the ad.
 */
VpaidVideoPlayer.prototype.skipAd = function () {
  this.log('skipAd');
  var skippableState = this.attributes_['skippableState'];
  if (skippableState) {
    this.callEvent_('AdSkipped');
  }
};

/**
 * Registers a callback for an event.
 * @param {Function} aCallback The callback function.
 * @param {string} eventName The callback type.
 * @param {Object} aContext The context for the callback.
 */
VpaidVideoPlayer.prototype.subscribe = function (aCallback, eventName, aContext) {
  this.log(`$$$Subscribe ${eventName} ${aCallback}`);
  var callBack = aCallback.bind(aContext);
  this.eventsCallbacks_[eventName] = callBack;
};

/**
 * Removes a callback based on the eventName.
 *
 * @param {string} eventName The callback type.
 */
VpaidVideoPlayer.prototype.unsubscribe = function (eventName) {
  this.log('unsubscribe ' + eventName);
  this.eventsCallbacks_[eventName] = null;
};

/**
 * @return {number} The ad width.
 */
VpaidVideoPlayer.prototype.getAdWidth = function () {
  return this.attributes_['width'];
};

/**
 * @return {number} The ad height.
 */
VpaidVideoPlayer.prototype.getAdHeight = function () {
  return this.attributes_['height'];
};

/**
 * @return {number} The time remaining in the ad.
 */
VpaidVideoPlayer.prototype.getAdRemainingTime = function () {
  return this.attributes_['remainingTime'];
};

/**
 * @return {number} The duration of the ad.
 */
VpaidVideoPlayer.prototype.getAdDuration = function () {
  return this.attributes_['duration'];
};

/**
 * @return {string} A list of icons.
 */
VpaidVideoPlayer.prototype.getAdIcons = function () {
  return this.attributes_['icons'];
};

/**
 * @return {boolean} True if the ad is a linear, false for non linear.
 */
VpaidVideoPlayer.prototype.getAdLinear = function () {
  return this.attributes_['linear'];
};

/**
 * Logs events and messages.
 *
 * @param {string} message
 */
VpaidVideoPlayer.prototype.log = function (message) {
  if (message === 'unsubscribe Ping') {
    console.log('this.eventsCallbacks_', this.eventsCallbacks_);
  }
  console.log('message***', message);
};

/**
 * Calls an event if there is a callback.
 * @param {string} eventType
 * @private
 */
VpaidVideoPlayer.prototype.callEvent_ = function (eventType) {
  if (eventType in this.eventsCallbacks_) {
    this.eventsCallbacks_[eventType]();
  }
};

/**
 * Callback for when the mute button is clicked.
 * @private
 */
VpaidVideoPlayer.prototype.muteButtonOnClick_ = function () {
  console.log("this.attributes_['volume']", this.attributes_);
  if (this.attributes_['volume'] == 0) {
    this.attributes_['volume'] = 1.0;
  } else {
    this.attributes_['volume'] = 0.0;
  }
  console.log('typeof', typeof this.attributes_['volume']);
  const test = true ? 'success' : 'failure';
  console.log('***test****', test);
  this.callEvent_('AdVolumeChange');
};

/**
 * Main function called by wrapper to get the vpaid ad.
 * @return {Object} The vpaid compliant ad.
 */
var getVPAIDAd = function () {
  return new VpaidVideoPlayer();
};

console.log('js loaded....***$');
