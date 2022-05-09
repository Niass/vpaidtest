const Vpaid = class {
    buttonReduceSwitch =
        '<svg id="bliink-switch" style="width:20px;height:20px;position:absolute;top:5px;z-index:50;right:10px;cursor: pointer;" version="1.1"\n id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n viewBox="0 0 170.8 113.3" style="enable-background:new 0 0 170.8 113.3;" xml:space="preserve">\n <style type="text/css">\n   .st0 {\n     opacity: 0.7;\n   }\n\n   .st1 {\n     fill: #FFFFFF;\n   }\n </style>\n <rect class="st0" width="170.8" height="113.3" />\n <path class="st1"\n   d="M88.8,63c-9.4,0-18.7,0-28.1,0c-5.1,0-8.5-3.4-6.6-6.7c1.1-1.9,3.6-3,6.8-3c11,0,22.1,0,33.1,0\nc7.7,0,15.5,0,23.2,0c3.5,0,6.5,1.9,6.8,4.2c0.4,2.5-1.9,4.8-5.4,5.3c-0.8,0.1-1.6,0.1-2.4,0.1C107.2,63,98,63,88.8,63z" />\n</svg>'
    buttonCloseSwitch =
        '<svg id="bliink-switch-close" style="width:20px;height:20px;position:absolute;bottom:35%;z-index:50;right:6px;cursor: pointer;" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 338 302" style="enable-background:new 0 0 338 302;" xml:space="preserve">\n<path d="M168.6,240.9c-49.7-0.2-89.7-40.6-89.5-90.4c0.2-49.7,40.5-89.6,90.4-89.5c49.2,0.1,89.5,40.7,89.4,90.1\nC258.8,200.8,218.2,241.1,168.6,240.9z M184.8,150.7c6.9-6.7,13.6-12.9,20-19.4c4.6-4.7,4.4-11.3,0.1-15.8\nc-4.4-4.6-11.2-4.8-16.2-0.4c-1.6,1.4-3.1,3-4.6,4.6c-5,5.1-9.9,10.1-15,15.4c-7-7.1-13.3-13.6-19.7-19.8c-3.9-3.7-9-4.3-13.4-1.9\nc-4.4,2.4-7.1,7.4-5.7,12.2c0.8,2.7,2.5,5.4,4.5,7.5c5.9,6.1,12.1,11.8,18.5,18c-7.2,7.1-13.7,13.3-20,19.7c-3.7,3.8-4.3,9.1-2,13.4\nc2.3,4.3,7,7,11.6,5.9c2.7-0.7,5.5-2.3,7.6-4.3c6.3-5.9,12.2-12.1,18.6-18.5c6.5,6.6,12.4,12.6,18.4,18.6c5.6,5.5,12.4,5.9,17.2,1.1\nc5-4.9,4.6-11.6-0.9-17.2C197.7,163.4,191.6,157.5,184.8,150.7z"/>\n</svg>'
    vpaidDom =
        '\n        <div\n            \n            \n            \n            data-wrapperId="62618aceb2164a0011bac534"\n            data-id="62618aceb2164a0011bac534"\n            data-index="1"\n            class="in-image hide"\n            style="z-index: 1; transition: all .8s ease-in-out; height: 390px;width: 634px;overflow:hidden;opacity: 1;transition: all ease-in-out 0.3s;"\n        >   <IMG src=\'https://e-stg.api.bliink.io/i.gif?name=impression&campaignId=536&advertiserId=21&tagId=173&siteId=143&networkId=25&adId=177\' BORDER="0" HEIGHT="1" WIDTH="1"><IMG src=\'https://e-stg.api.bliink.io/i.gif?name=impression&campaignId=535&advertiserId=21&tagId=173&siteId=143&networkId=25&adId=169\' BORDER="0" HEIGHT="1" WIDTH="1">\n            <div style="width:100%; height:35%; position: absolute; bottom: 0;">\n                <div data-type="image" style="background: url(https://creative-stg.bliink.io/62618aceb2164a0011bac52c/q7S2XMW.png) no-repeat center center; background-size: cover;position: absolute; width: 183%; height: auto !important; top: 26%; bottom: -29%; left: -18%; right: -65%; ; z-index: 0;"></div><div  data-type="image" style="position: absolute; width: 45%; height: 47%; top: 45%; bottom: 8%; left: 31%; right: 24%; ;"> <img  src="data:image/png;base64,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" alt="" style="z-index: 1; height: 100%; width: 100%;"/></div><div  data-type="image" style="position: absolute; width: 21%; height: 23%; top: 52%; bottom: 25%; left: 77%; right: 2%; ;"> <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAuCAYAAABJXNnBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFKklEQVR4nO3cX0hbVxwH8K/BaJpqTGLUxLk1gmHtQBfHpAxmJnRS0UCZUgb6EDb2ovWxsq578anbqI9dfdlD8+DDHtqxocUgwtBCcQ4iFPpnGUQ2iUZTkzZZlqgke8juaf7cmKj3mmP5fUC4uX/Ouer3/s45V7AsmUwmQQhHFKW+AUKyUSgJdyiUhDsUSsIdCiXhDoWScIdCSbhDoSTcoVAS7lAoCXcolIQ7FErCHQol4Q6FknCHQkm4Q6Ek3CmXs/GV2DraN+6KHnOom3Gnvg/+vTA6/b/AsxvElN6GQU0b/HthGNecBdtPmkcBAN9sP8D1lyuAQgWP8RO0VNRmnDcTeQZ7YA4AMG3oRl/V26LtFer3tvY8+qvOoqG8mu1jfef5Hi+rW/L2txhdxYPYWsb1FqUO49WtGNS05Zy/X18C4WeYfq7bOIDHO1sY2l7Y91pB0jx6oL6kVvJK+XvMB89uEAAwHn50tMYSMfRuzeKfxI4Ed5ZrJLQE45oTf+48L+p8Z9QLe2AOY4H5nGNjgXnYNqdzfvGe3SCGthdQ9tcPWImtS3HbJ46sldKqMrFqBohXoi51MxzqZjijXnx26kxOGzc0Vnyl/7DoPj27QVwJzOFOfd/hbxyvKrlgMrSMkdASAKB3axZ/vDGUc43bOACrygQgNUpcCz6EK+7DROQJulRNrGKOBeYxEXkCALhY2Yiva95Dp9oM/14Y9yJPU/0kYmjfnMFG46cZlVmsr2IMatoyqlp6Jdxocoj2ISh0XGolr5SnFRVs+3PNu5K06Yx6MRlalqQtwbC2A1erzgFIBb9QtbSqTLhV+xH7/GtsDUAqrOmBnDX1o1NtBgA0lFdjWNuBhXp76qJEDF8WOeS+TkoeSv9eGM6oFw51s6RP40hoCTORZ5K1BwDtFXVse30vXPD89Lnto90XAICpyGO271vdB6LXdarNuFjZCCD1gMk1HeGVrMN3MRrKqzOG+GzXX66ITrjzDV/Thm62qLEH5uCpMEh2r+6dLbZtKuIBSq+mrcoaAK/CCWDf4ffSqTfhivsAAJ6d5wcaqqUmtvjLnt5IqeShlNr7qkZM6W1spdm7NYvx6tYjtzsZWmbDrkWpy1nhZxPmlIIuVdOR7yGd2FsNOYNynEoWyjqFqqjzDrrQAVKT+heJOEZCS2w1e1DOqBfO1Vuix+7X9Yju3+/1l7DIaVXWsAq4ElvPWwF//vdvtm0p8ADI7bgXOrKGUpgLpS9mBHpFpZxdY1jbgaWdTTijXsnaFHtPWcjVqnO4abjAPg9VvcMq7rXgQ8ya+nOuWYyusuA61M2iP7+Drr5PElkXOgP+aQz4p9n7tonQb+zYmXKNnF0DAL43dMOi1B3qWoe6GUnzaMbXsLZj30C6jQPsXGGhMhH1wp+2KLKqTGwV74r70LN+D4vRVQCpRd9kaBm2zenUyQoVvtPbDnX/J5lslTL9aXdlDWsWpQ6Xqs4W1U6+hQ5QuFqcVlTgfl0PLBs/AYlYcTcuEWddN4y+H4FEDI6tOdxtsLOKJ1TOicgTuOI+uDZ9uQ0oVHDX9x3rsJlPvr9yyTWHla1SdqrNcBsHWFUQ3Naeh9t0WXRIkkNLRS0WDB8fS1/pGsqrWb+uuA9X/n8jILhpuICFejtuaKwZ+y1KHab0NiTf+uK1HZ4LKaN/cEV4U/KX54Rko1AS7lAoCXcolIQ7FErCHQol4Q6FknCHQkm4Q6Ek3KFQEu5QKAl3KJSEOxRKwh0KJeEOhZJwh0JJuPMf5brNbwfChNsAAAAASUVORK5CYII=" alt="" style="z-index: 2; height: 100%; width: 100%;"/></div><div  data-type="image" style="position: absolute; width: 11%; height: 77%; top: 22%; bottom: 1%; left: 19%; right: 70%; ;"> <img  src="https://creative-stg.bliink.io/62618aceb2164a0011bac52c/RSFq1IO.png" alt="" style="z-index: 3; height: 100%; width: 100%;"/></div><div  data-type="image" style="position: absolute; width: 12%; height: 24%; top: 57%; bottom: 19%; left: 2%; right: 86%; ;"> <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAuCAYAAABKxxWsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBElEQVR4nO3cW4hVVRzH8c/UgDYOmWlqF80ijC7EQFFQQWYP3Ygub90EoyBKaqCCKKKs6CEqiIl6KKwwXySiG0EvXYguRCJBFhk1OFpJJg02WpZpD6sD4zDH899n9tp7OuMXDszZ57fX+u/f/Gfttdb+n+kyOLAQ15s4f+FvDONnfIdN2FdC22UxDzdNsI092I0/sQ2bsRE7og1040Q8NsFAmrEVr+FZbMjURxGOlu9av8BarML2AwkPyRRAg/m4DV9hjXTRncpZeBxb8Ch6mglzmz6a6yTzL62wzzqYjvuxHn3jCao0HY7E27ix4n7rYDE+wtKxH1RteqPPl3B5DX1XTa+UZGePPliH6Y1+V+vsMb7BYdJkYnbjQF2mwyw8UWP/VXIsnmy8qdN0uBYn1xxDVSzDaRQzfZGUnc1ex+FC6Te6M9hmF5YHdEPSImuir/XBuG7Q/DoX4RzciS+D7ZGudUX6YXBgCd4PnDRLWm1GOF66gZwe0G7UOtuHsCDYdxlcjdcDui7cgafEEngEc3INL5uk+XhkabwYczPFkZt9eBo3B/W9ODfnmL4FzwW1p2SMowpexJtB7QW5b6TvBHXHZI2iGgaCulNzm/5jUDctaxTV8LG0A9mKk3Kb3hvURWc7k5k/pBt+K+blNv3MoG5b1iiq45eAZnZu0yNzcNLuYyfwU0AzrTtjAHfh/IDue/zaQvMujppwRMzEkhLaacbvEVEO00/AA+JZ/mpAc0v74exHn/iqtB0iN9JCpq+RnoE2owcLFd9LWV1QP5kZiYiKmH5Zm4EciLUmx7PTSqlzl3G3NAxNOeo0/W5ps2vKUZfpA3impr5rpw7TH5T2oqcsOefpY9kg7T2/V2Gfk5KqTH8LV2Fvm+c/r7zFUU6aFhiNpirTl0o1L61Wns24WLVPjtpldmtJsTF9vOeF5wXPnSHNVjqdyBOwnUVMHx7n9QneCJ6/AnMK9Pd/ZH5As72M2cvKoK7Ts71HqoBuxdYyTF/vYLbDRWLD9cay5ukHsz2VhEf4uizTp3q2L8clQe2HZa5Ip2K2d0mr6xeC+mF8XuY8vZHtVwa0K6Ti0Xbn7bmZgSPGOX6o9Fc6Vyp/XoYzCrT7MvaUvThaKWZ6I9vvDba7sO2I9qdP7MnRKyX1N5q9/iu+KnvDq8jYfqvxs6lTWYVvybPLGB3bZ6I/Q/+TkSHc03iTw/Qi2d6v87N9BNcYVfGcaz/9kaCu07N9B67AutEHc5m+TqpVidCvM7P9G2lD8IOxH+R8cvRQUNdp2b4LD0tf5h23ci2n6Z8plu3T84WSnX34VKpqWyA9ktzVTNyNH3BfpmBuF/++6OHSPznIyWblVIv9I5n6m1S/OKhA5fG/n0a8s754gZAAAAAASUVORK5CYII=" alt="" style="z-index: 4; height: 100%; width: 100%;"/></div>\n            </div>\n    </div>'
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
