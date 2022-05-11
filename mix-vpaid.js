const Vpaid = class {
    buttonReduceSwitch =
        '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
    buttonCloseSwitch =
        '<svg id="bliink-switch-close" style="width:20px;height:20px;position:absolute;bottom:35%;z-index:50;right:6px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
    vpaidDom =
        '\n        <div\n            \n            \n            \n            data-wrapperId="6278da1ede529201c95072ed"\n            data-id="6278da1ede529201c95072ed"\n            data-index="1"\n            class="full-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; position: absolute; left: 0.00%; top: 0.00%; width: 100.00%; height: 100.00%; transition: all ease-in-out 0.3s;"\n        >   \n            <div style="width:100%; height:100%; position: absolute; bottom: 0;">\n                <div  data-type="image" style="position: absolute; width: 300px; height: 300px; top: 73px; bottom: 62px; left: 121px; right: 159px; ;"> <img  src="data:image/png;base64,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" alt="" style="z-index: 0; height: 100%; width: 100%;"/></div>\n            </div>\n    </div>'
    vpaidDomInImage = undefined
    videoStylesFormat = ''
    adDuration = 9000
    constructor() {
        /**
         * The slot is the div element on the main page that the ad is supposed to
         * occupy.
         * @private {Object}
         */
        this.slot_ = null

        /**
         * The video slot is the video element used by the ad to render video
         * content.
         * @private {Object}
         */
        this.videoSlot_ = null

        /**
         * An object containing all registered events. These events are all
         * callbacks for use by the VPAID ad.
         * @private {Object}
         */
        this.eventsCallbacks_ = {}

        /**
         * A list of getable and setable attributes.
         * @private {Object}
         */
        this.attributes_ = {
            companions: '',
            desiredBitrate: 256,
            duration: 10,
            expanded: false,
            height: 0,
            icons: '',
            linear: false,
            skippableState: false,
            viewMode: 'normal',
            width: 0,
            volume: 1.0,
        }

        /**
         * When the ad was started.
         * @private {number}
         */
        this.startTime_ = 0

        /**
         * A set of ad playback events to be reported.
         * @private {Object}
         */
        this.quartileEvents_ = [
            { event: 'AdImpression', value: 0 },
            { event: 'AdVideoStart', value: 0 },
            { event: 'AdVideoFirstQuartile', value: 25 },
            { event: 'AdVideoMidpoint', value: 50 },
            { event: 'AdVideoThirdQuartile', value: 75 },
            { event: 'AdVideoComplete', value: 100 },
        ]

        /**
         * @private {number} An index into what quartile was last reported.
         */
        this.nextQuartileIndex_ = 0

        /**
         * Parameters passed in from the AdParameters section of the VAST.
         * Used for video URL and MIME type.
         * @private {!Object}
         */
        this.parameters_ = {}
    }
    clickAd_() {
        if ('AdClickThru' in this.eventsCallbacks_) {
            this.eventsCallbacks_['AdClickThru']('', '0', true)
        }
    }
    /**
     * Returns the supported VPAID verion.
     * @param {string} version
     * @return {string}
     */
    handshakeVersion() {
        return '2.0'
    }

    /**
     * Initializes all attributes in the ad. The ad will not start until startAd
     * is called.
     * @param {number} width The ad width.
     * @param {number} height The ad height.
     * @param {string} viewMode The ad view mode.
     * @param {number} desiredBitrate The desired bitrate.
     * @param {Object} creativeData Data associated with the creative.
     * @param {Object} environmentVars Runtime variables associated with the
     *     creative like the slot and video slot.
     */
    initAd(
        width,
        height,
        viewMode,
        desiredBitrate,
        creativeData,
        environmentVars
    ) {
        this.attributes_['width'] = width
        this.attributes_['height'] = height
        this.attributes_['viewMode'] = viewMode
        this.attributes_['desiredBitrate'] = desiredBitrate

        // slot and videoSlot are passed as part of the environmentVars
        this.slot_ = environmentVars.slot
        this.videoSlot_ = environmentVars.videoSlot

        // Parse the incoming ad parameters.
        this.parameters_ = JSON.parse(creativeData['AdParameters'])

        this.log(
            'initAd ' +
                width +
                'x' +
                height +
                ' ' +
                viewMode +
                ' ' +
                desiredBitrate
        )

        this.videoSlot_.addEventListener(
            'loadedmetadata',
            this.loadedMetadata_.bind(this),
            false
        )
        this.videoSlot_.addEventListener(
            'timeupdate',
            this.timeUpdateHandler_.bind(this),
            false
        )
        this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false)
        this.slot_.addEventListener('click', this.clickAd_.bind(this), false)
        const vpaidType = this.parameters_.vpaidType
        if (vpaidType === 'linear') {
            this.updateVideoSlot_()
        } else {
            console.log('no linear typ')
        }
        this.callEvent_('AdLoaded')
    }

    updateVideoSlot_ = () => {
        if (this.videoSlot_ == null) {
            this.videoSlot_ = document.createElement('video')
            this.log(
                'Warning: No video element passed to ad, creating element.'
            )
            this.slot_.appendChild(this.videoSlot_)
        }
        this.updateVideoPlayerSize_()
        let foundSource = false
        const videos = this.parameters_.mediaFiles || []
        for (let i = 0; i < videos.length; i++) {
            // Choose the first video with a supported mimetype.
            if (this.videoSlot_.canPlayType(videos[i].type) != '') {
                this.videoSlot_.setAttribute('src', videos[i].uri)
                foundSource = true
                if (videos[i].styles) {
                    this.videoSlot_.style.cssText = videos[i].styles
                }
                break
            }
        }
        if (!foundSource) {
            // Unable to find a source video.
            this.callEvent_('AdError')
        }
    }

    /**
     * Helper function to update the size of the video player.
     * @private
     */

    /**
     * Helper function to update the size of the video player.
     * @private
     */
    updateVideoPlayerSize_() {
        this.videoSlot_.setAttribute('width', this.attributes_['width'])
        this.videoSlot_.setAttribute('height', this.attributes_['height'])
    }

    /**
     * Called by the wrapper to start the ad.
     */
    startAd() {
        const vpaidType = this.parameters_.vpaidType
        this.log('Starting ad')
        if (vpaidType === 'linear') {
            this.videoSlot_?.play()
            if (this.adDuration && !this.videoStylesFormat) {
                setTimeout(() => {
                    this.stopAd()
                }, this.adDuration)
            }
        }
        const date = new Date()
        this.startTime_ = date.getTime()

        // Create an img tag and populate it with the image passed in to the ad
        // parameters.

        if (this.videoSlot_.nodeName) {
            if (vpaidType === 'linear') {
                const domSlot = this.slot_
                domSlot.classList.add('percentage')
                if (this.videoStylesFormat) {
                    this.videoSlot_.style.transition = 'width 1s ease-in-out'
                    this.videoSlot_.style.cssText = this.videoStylesFormat
                    this.videoSlot_.style.zIndex = 10
                    this.videoSlot_.parentElement.parentElement.classList.add(
                        'percentage'
                    )
                }
                if (this.vpaidDom) {
                    domSlot.insertAdjacentHTML('beforeend', this.vpaidDom)
                    if (this.vpaidDomInImage) {
                        domSlot.insertAdjacentHTML(
                            'beforeend',
                            this.vpaidDomInImage
                        )
                    }
                    if (this.buttonReduceSwitch && this.vpaidDomInImage) {
                        domSlot.insertAdjacentHTML(
                            'beforeend',
                            this.buttonReduceSwitch
                        )
                    }
                    if (this.vpaidDomInImage) {
                        const wrapper = domSlot.parentElement.querySelector(
                            '.full-image'
                        )
                        const reduceSwitchButton = domSlot.parentElement.querySelector(
                            '#bliink-switch'
                        )
                        if (reduceSwitchButton) {
                            const that = this
                            const inImageWrapper = domSlot.parentElement.querySelector(
                                '.in-image'
                            )
                            reduceSwitchButton.addEventListener(
                                'click',
                                function () {
                                    wrapper.style.top = '100%'
                                    wrapper.style.opacity = 0
                                    wrapper.style.display = 'none'
                                    inImageWrapper.style.opacity = 1
                                    this.style.display = 'none'
                                    domSlot.insertAdjacentHTML(
                                        'beforeend',
                                        that.buttonCloseSwitch
                                    )
                                    const closeSwitchButton = domSlot.parentElement.querySelector(
                                        '#bliink-switch-close'
                                    )
                                    closeSwitchButton.addEventListener(
                                        'click',
                                        function () {
                                            const inImageWrapper = domSlot.parentElement.querySelector(
                                                '.in-image'
                                            )
                                            this.remove()
                                            inImageWrapper.remove()
                                        }
                                    )
                                }
                            )
                        }
                        const inImageWrapper = domSlot.parentElement.querySelector(
                            '.in-image'
                        )
                        const timing = +wrapper.dataset.transitionTiming
                        setTimeout(() => {
                            const closeSwitchButton_ = domSlot.parentElement.querySelector(
                                '#bliink-switch-close'
                            )
                            wrapper.style.top = '100%'
                            wrapper.style.opacity = 0
                            wrapper.style.display = 'none'
                            inImageWrapper.style.opacity = 1
                            const reduceSwitchButton = domSlot.parentElement.querySelector(
                                '#bliink-switch'
                            )
                            if (reduceSwitchButton) {
                                reduceSwitchButton.remove()
                            }
                            if (!closeSwitchButton_) {
                                domSlot.insertAdjacentHTML(
                                    'beforeend',
                                    this.buttonCloseSwitch
                                )
                                const closeSwitchButton = domSlot.parentElement.querySelector(
                                    '#bliink-switch-close'
                                )
                                closeSwitchButton.addEventListener(
                                    'click',
                                    function () {
                                        const inImageWrapper = domSlot.parentElement.querySelector(
                                            '.in-image'
                                        )
                                        this.remove()
                                        inImageWrapper.remove()
                                    }
                                )
                            }
                        }, timing)
                    }
                }
            } else {
                const container = this.videoSlot_?.parentElement?.parentElement
                    .parentElement.parentElement
                const video = container.querySelector('video')
                video.parentElement.style.minHeight = '350px'
                if (this.videoStylesFormat) {
                    video.style.cssText = this.videoStylesFormat
                    video.style.zIndex = 10
                }

                video.parentElement.insertAdjacentHTML(
                    'beforeend',
                    this.vpaidDom
                )
                if (this.buttonReduceSwitch && this.vpaidDomInImage) {
                    video.parentElement.insertAdjacentHTML(
                        'beforeend',
                        this.buttonReduceSwitch
                    )
                }
                if (this.vpaidDomInImage) {
                    video.parentElement.insertAdjacentHTML(
                        'beforeend',
                        this.vpaidDomInImage
                    )
                    const wrapper = video.parentElement.parentElement.querySelector(
                        '.full-image'
                    )
                    const inImageWrapper = video.parentElement.parentElement.querySelector(
                        '.in-image'
                    )
                    const reduceSwitchButton = video.parentElement.parentElement.querySelector(
                        '#bliink-switch'
                    )
                    if (reduceSwitchButton) {
                        const that = this
                        reduceSwitchButton.addEventListener(
                            'click',
                            function () {
                                wrapper.style.top = '100%'
                                wrapper.style.opacity = 0
                                wrapper.style.display = 'none'
                                inImageWrapper.style.opacity = 1
                                this.style.display = 'none'
                                if (that.buttonCloseSwitch) {
                                    video.parentElement.insertAdjacentHTML(
                                        'beforeend',
                                        that.buttonCloseSwitch
                                    )
                                    const closeSwitchButton = video.parentElement.parentElement.querySelector(
                                        '#bliink-switch-close'
                                    )
                                    closeSwitchButton.addEventListener(
                                        'click',
                                        function () {
                                            const inImageWrapper = video.parentElement.parentElement.querySelector(
                                                '.in-image'
                                            )
                                            this.remove()
                                            inImageWrapper.remove()
                                        }
                                    )
                                }
                            }
                        )
                    }
                    const timing = +wrapper.dataset.transitionTiming
                    setTimeout(() => {
                        wrapper.style.top = '100%'
                        wrapper.style.opacity = 0
                        wrapper.style.display = 'none'
                        inImageWrapper.style.opacity = 1
                        const reduceSwitchButton = video.parentElement.parentElement.querySelector(
                            '#bliink-switch'
                        )
                        if (reduceSwitchButton) {
                            reduceSwitchButton.remove()
                        }
                        const closeSwitchButton_ = video.parentElement.parentElement.querySelector(
                            '#bliink-switch-close'
                        )
                        if (!closeSwitchButton_) {
                            video.parentElement.insertAdjacentHTML(
                                'beforeend',
                                this.buttonCloseSwitch
                            )
                            const closeSwitchButton = video.parentElement.parentElement.querySelector(
                                '#bliink-switch-close'
                            )
                            closeSwitchButton.addEventListener(
                                'click',
                                function () {
                                    const inImageWrapper = video.parentElement.parentElement.querySelector(
                                        '.in-image'
                                    )
                                    this.remove()
                                    inImageWrapper.remove()
                                }
                            )
                        }
                    }, timing)
                }
            }
        } else {
            this.slot_.insertAdjacentHTML('beforeend', this.vpaidDom)
            // Handle case no DOM access
            if (this.vpaidDomInImage) {
                this.slot_.insertAdjacentHTML('beforeend', this.vpaidDomInImage)
            }
        }

        this.callEvent_('AdStarted')
        this.callEvent_('AdImpression')
    }

    /**
     * Called when the non-linear ad is clicked.
     * @private
     */
    adClick_() {
        if ('AdClickThru' in this.eventsCallbacks_) {
            this.eventsCallbacks_['AdClickThru']('', '0', true)
        }
    }

    /**
     * Called by the video element when the video reaches specific points during
     * playback.
     * @private
     */
    timeUpdateHandler_() {
        if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
            return
        }
        const percentPlayed =
            (this.videoSlot_.currentTime * 100.0) / this.videoSlot_.duration
        const nextQuartile = this.quartileEvents_[this.nextQuartileIndex_]
        if (percentPlayed >= nextQuartile.value) {
            this.eventsCallbacks_[nextQuartile.event]()
            this.nextQuartileIndex_ += 1
        }
        if (this.videoSlot_.duration > 0) {
            this.attributes_['remainingTime'] =
                this.videoSlot_.duration - this.videoSlot_.currentTime
        }
    }

    /**
     * Called by the video element when video metadata is loaded.
     * @private
     */
    loadedMetadata_() {
        // The ad duration is not known until the media metadata is loaded.
        // Then, update the player with the duration change.
        this.attributes_['duration'] = this.videoSlot_.duration
        this.callEvent_('AdDurationChange')
    }

    /**
     * Called by the wrapper to stop the ad.
     */
    stopAd() {
        this.log('Stopping ad')
        // Calling AdStopped immediately terminates the ad. Setting a timeout allows
        // events to go through.
        const callback = this.callEvent_.bind(this)
        setTimeout(callback, 75, ['AdStopped'])
    }

    /**
     * Called when the video player changes the width/height of the container.
     * @param {number} width The new width.
     * @param {number} height A new height.
     * @param {string} viewMode A new view mode.
     */
    resizeAd(width, height, viewMode) {
        this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode)
        this.attributes_['width'] = width
        this.attributes_['height'] = height
        this.attributes_['viewMode'] = viewMode
        this.updateVideoPlayerSize_()
        this.callEvent_('AdSizeChange')
    }

    /**
     * Pauses the ad.
     */
    pauseAd() {
        this.log('pauseAd')
        this.videoSlot_.pause()
        this.callEvent_('AdPaused')
    }

    /**
     * Resumes the ad.
     */
    resumeAd() {
        this.log('resumeAd')
        this.videoSlot_.play()
        this.callEvent_('AdPlaying')
    }

    /**
     * Expands the ad.
     */
    expandAd() {
        this.log('expandAd')
        this.attributes_['expanded'] = true
        this.callEvent_('AdExpanded')
    }

    /**
     * Collapses the ad.
     */
    collapseAd() {
        this.log('collapseAd')
        this.attributes_['expanded'] = false
    }

    /**
     * Skips the ad.
     */
    skipAd() {
        this.log('skipAd')
        if (this.attributes_['skippableState']) {
            this.callEvent_('AdSkipped')
        }
    }

    /**
     * Registers a callback for an event.
     * @param {Function} callback The callback function.
     * @param {string} eventName The callback type.
     * @param {Object} context The context for the callback.
     */

    subscribe(callback, eventName, context) {
        this.log('Subscribe ' + eventName)
        this.eventsCallbacks_[eventName] = callback.bind(context)
    }

    /**
     * Removes a callback based on the eventName.
     * @param {string} eventName The callback type.
     */
    unsubscribe(eventName) {
        this.log('unsubscribe ' + eventName)
        this.eventsCallbacks_[eventName] = null
    }

    /**
     * Returns whether the ad is linear.
     * @return {boolean} True if the ad is a linear, false for non linear.
     */
    getAdLinear() {
        return this.attributes_['linear']
    }

    /**
     * Returns ad width.
     * @return {number} The ad width.
     */
    getAdWidth() {
        return this.attributes_['width']
    }

    /**
     * Returns ad height.
     * @return {number} The ad height.
     */
    getAdHeight() {
        return this.attributes_['height']
    }

    /**
     * Returns true if the ad is expanded.
     * @return {boolean}
     */
    getAdExpanded() {
        this.log('getAdExpanded')
        return this.attributes_['expanded']
    }

    /**
     * Returns the skippable state of the ad.
     * @return {boolean}
     */
    getAdSkippableState() {
        this.log('getAdSkippableState')
        return this.attributes_['skippableState']
    }

    /**
     * Returns the remaining ad time, in seconds.
     * @return {number} The time remaining in the ad.
     */
    getAdRemainingTime() {
        const date = new Date()
        const currentTime = date.getTime()
        const remainingTime =
            this.attributes_.duration - (currentTime - this.startTime_) / 1000.0
        return remainingTime
    }

    /**
     * Returns the duration of the ad, in seconds.
     * @return {number} The duration of the ad.
     */
    getAdDuration() {
        return this.attributes_['duration']
    }

    /**
     * Returns the ad volume.
     * @return {number} The volume of the ad.
     */
    getAdVolume() {
        this.log('getAdVolume')
        return this.attributes_['volume']
    }

    /**
     * Sets the ad volume.
     * @param {number} value The volume in percentage.
     */
    setAdVolume(value) {
        this.attributes_['volume'] = value
        this.log('setAdVolume ' + value)
        this.callEvent_('AdVolumeChange')
    }

    /**
     * Returns a list of companion ads for the ad.
     * @return {string} List of companions in VAST XML.
     */
    getAdCompanions() {
        return this.attributes_['companions']
    }

    /**
     * Returns a list of icons.
     * @return {string} A list of icons.
     */
    getAdIcons() {
        return this.attributes_['icons']
    }

    /**
     * Logs events and messages.
     * @param {string} message
     */
    log(message) {
        console.log(message)
    }

    /**
     * Calls an event if there is a callback.
     * @param {string} eventType
     * @private
     */
    callEvent_(eventType) {
        if (eventType in this.eventsCallbacks_) {
            this.eventsCallbacks_[eventType]()
        }
    }
}

/**
 * Main function called by wrapper to get the VPAID ad.
 * @return {Object} The VPAID compliant ad.
 */
var getVPAIDAd = function () {
    return new Vpaid()
}
