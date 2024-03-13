
async function sendEventWithToken(eventName, token, label) {
  if (eventName && token) {
    let urlWithParams = "https://e.api.bliink.io/i.gif?token=" + token + "&name=" + eventName;

    if (label && typeof label === "string") {
      urlWithParams = urlWithParams + "&label=" + label;

    }
    try {
      await fetch(urlWithParams)
    } catch (error) {
      console.log("bliink error", error)
    }
  }

  throw new Error("Missing params")
}

const bliinkAd = {"tag_infos":{"sticky":[{"id":10494,"position":"bottom_responsive","platform_id":2,"options":2}],"format":3,"display_type":"sticky"},"creative":{"banner":{"height":60,"width":300,"adm":"<iframe src=\"https://creative.bliink.io/bmw_i5_sticky_fevrier/sticky/index.html?cb=1707322741&gdpr=1&gdpr_consent=CP56uoAP56uoAGEABAFRAnEsAP_gAEPgAAqIg1NX_H__bX9r-Xr36ft0eY1f99j77sQxBhfJs-4FzLvW_JwX32EzNE36tqYKmRIEu3bBIQFlHJnUTVihaogVrzDsYkGcgTNKJ6BkiFMRc2dYCF5vmQtj-QKZ5vp_d3f52T_9_dv-3dzyz9Vnv3e9fue1eJidK58tDfv_bRKb-_If9_5-v4v0_N_rk2_eTVt_9evp7x-uft-___V-9____4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQagCzDQqIA-yJCQi0HCKBACIKwgIoEAAAAJA0QEAJgwKdgYBLrCRACBFAAMEAIAAUZAAgAAEgAQiACQAoEAAEAgUAAAAAAgEADAwABgAtBAIAAQHQIUwIAFAsAEjMiIUwIQoEggJbKBBICgQVwgCLHAggERMFAAACQAVgAAAsFgMSSAlYkECXEG0AABAAgEEIFQik6MAQwJmy1U4om0ZWkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAACAA.YAAAAAAAAAAA&isSticky=true&isPrebid=false#click=https://e.api.bliink.io/c?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDg0MjM0ODQsImlhdCI6MTcwNzgxODY4NCwiaXNzIjoiYmxpaW5rIiwiZGF0YSI6eyJwYXJ0aXRpb25fdGltZSI6IjIwMjQtMDItMTMgMTA6MDQ6NDQgVVRDIiwidHlwZSI6ImFkLXNlcnZlciIsInRyYW5zYWN0aW9uSWQiOiIyNzhjZjljM2FiYWVjZDUiLCJuZXR3b3JrSWQiOjI5LCJzaXRlSWQiOjk5NSwidGFnSWQiOjM5NTYsImNvb2tpZUlkIjoiZjI3N2YwZjItMTVmNy00NGYxLWEwNDAtMjRjMzVmODVmNzNjIiwiZXZlbnRJZCI6MywiY3JlYXRlZEF0IjoxNzA3ODE4Njg0NDQwLCJ0YXJnZXRpbmciOnsicGxhdGZvcm0iOiJNb2JpbGUgV2Vic2l0ZSIsInJlZmVycmVyIjoiaHR0cHM6Ly93d3cub256ZW1vbmRpYWwuY29tLyIsInBhZ2VVcmwiOiJodHRwczovL3d3dy5vbnplbW9uZGlhbC5jb20vdHJhbnNmZXJ0cy9yZWFsLW1hZHJpZC1sZS1tZXNzYWdlLW9uLW5lLXBldXQtcGx1cy1jbGFpci1kZS12aW5pY2l1cy1hLWZsb3JlbnRpbm8tcGVyZXotODcyNjMyIiwiaXAiOiI4OC4xNzIuMjM1LjE3OSIsInRpbWUiOjE3MDc4MTg2ODQsImxvY2F0aW9uIjp7ImxhdGl0dWRlIjo0OC41NDc4LCJsb25naXR1ZGUiOjIuNjU2OCwicmVnaW9uIjoiSURGIiwiemlwQ29kZSI6Ijc3MDAwIiwiZGVwYXJ0bWVudCI6Ijc3In0sImNpdHkiOiJNZWx1biIsImNvdW50cnkiOiJGUiIsImludGVybmV0Q29ubmVjdGlvblR5cGUiOiJ1bmtub3duIiwiZGV2aWNlT3MiOiJpT1MiLCJkZXZpY2VNb2RlbCI6ImlQaG9uZSIsImRldmljZVBsYXRmb3JtIjoiTW9iaWxlIFdlYnNpdGUiLCJyYXdVc2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEzXzJfMyBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDUuMS4xNSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMTMuMC4zIE1vYmlsZS8xNUUxNDggU2FmYXJpLzYwNC4xIn0sImdkcHIiOnsiaGFzQ29uc2VudCI6dHJ1ZSwiY29uc2VudFN0cmluZyI6IkNQNTZ1b0FQNTZ1b0FHRUFCQUZSQW5Fc0FQX2dBRVBnQUFxSWcxTlhfSF9fYlg5ci1YcjM2ZnQwZVkxZjk5ajc3c1F4QmhmSnMtNEZ6THZXX0p3WDMyRXpORTM2dHFZS21SSUV1M2JCSVFGbEhKblVUVmloYW9nVnJ6RHNZa0djZ1ROS0o2QmtpRk1SYzJkWUNGNXZtUXRqLVFLWjV2cF9kM2Y1MlRfOV9kdi0zZHp5ejlWbnYzZTlmdWUxZUppZEs1OHREZnZfYlJLYi1fSWY5XzUtdjR2MF9OX3JrMl9lVFZ0XzlldnA3eC11ZnQtX19fVi05X19fXzRBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVRYWdDekRRcUlBLXlKQ1FpMEhDS0JBQ0lLd2dJb0VBQUFBSkEwUUVBSmd3S2RnWUJMckNSQUNCRkFBTUVBSUFBVVpBQWdBQUVnQVFpQUNRQW9FQUFFQWdVQUFBQUFBZ0VBREF3QUJnQXRCQUlBQVFIUUlVd0lBRkFzQUVqTWlJVXdJUW9FZ2dKYktCQklDZ1FWd2dDTEhBZ2dFUk1GQUFBQ1FBVmdBQUFzRmdNU1NBbFlrRUNYRUcwQUFCQUFnRUVJRlFpazZNQVF3Sm15MVU0b20wWldrQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUlBQUFDQUEuWUFBQUFBQUFBQUFBIn0sInVzZXJfaWQiOiJmMjc3ZjBmMi0xNWY3LTQ0ZjEtYTA0MC0yNGMzNWY4NWY3M2MiLCJucCI6IkxycG8xTExXL0hVZ09STXhHZkcxdUE9PSIsImdwIjoiTHJwbzFMTFcvSFVnT1JNeEdmRzF1QT09IiwiZW5jVHAiOiJmMzRxTlcxV0s5SFRMQnlOMytaWDRnPT0iLCJlbmNEZW0iOiJBeVhJRHBOd2g5MllDNWlQY3dnR3p3PT0iLCJmbGFncyI6NSwibWFyZ2luIjoxMCwiY3VycmVuY3kiOiJFVVIiLCJ3aW4iOmZhbHNlLCJmb3JtYXQiOjMsImRpc3BsYXlUeXBlIjoic3RpY2t5IiwiYWRJZCI6MTg1NjMsImFkdmVydGlzZXJJZCI6MTMwLCJjYW1wYWlnbklkIjoxNzU2LCJjcmVhdGl2ZUlkIjo1Njc5LCJlcnJvciI6ZmFsc2V9fQ.-JtBLDletvKQiSETaCUci36yMGfkHdGUU0blVy-zMJA&redirect=\" style=\"height: 100%; width: 100%; border: 0;\"></iframe><script src=\"https://tag.bliink.io/creative.min.js?cb=1707755208\"></script><img src='https://e.api.bliink.io/i.gif?name=impression&token=eyJhbGciOiJ' border='0' height='1' width='1'>"},"media_type":"banner"},"price":0.9,"token":"eyJhbGciOiJI","mode":"ad","extras":{"deal_id":"5679","transaction_id":"278cf9c3abaecd5","creative":{"ad_id":18563,"category":1,"type":1,"viewability_duration":1,"viewability_percent_in_view":30}},"currency":"EUR"}

window.bliinkAds = window.bliinkAds || {}

window.bliinkAds[bliinkAd.extras.transaction_id] = bliinkAd


function getWindowSelf() {
  return window.self
}

function getWindowTop() {
  return window.top
}

function canAccessTopWindow() {
  try {
    if (getWindowTop()?.location.href) {
      return true
    }
  } catch (error) {
    return false
  }
  return false
}

function getWindowContext() {
  return canAccessTopWindow() ? getWindowTop() : getWindowSelf()
}

function isScriptLoaded(ad) {
  return !!getWindowContext()?.document.querySelector(
    `[data-id="${ad.extras.transaction_id}"]`
  )
}

const urlScript = "http://localhost:3000"
function createScriptElement(ad) {
  const script = document.createElement("script")
  script.dataset.id = ad.extras.transaction_id
  script.type = "text/javascript"
  script.async = true
  script.src = `${urlScript}/creative.js`

  return script
}

if (canAccessTopWindow()) {
  const bliinksAds = window.top?.bliinkLoadedAds ?? {}
  const currentAd = { window: getWindowSelf() }
  currentAd.isIframe = !!window.frameElement
  bliinksAds[`bliink_ad_${bliinkAd?.extras?.transaction_id}`] = currentAd
  if (window.top) window.top.bliinkLoadedAds = bliinksAds

  const parentElement = document.currentScript?.parentElement
  if (!currentAd.isIframe && parentElement) {
    parentElement.classList.add(`bliink_ad_${bliinkAd?.extras?.transaction_id}`)
    parentElement.dataset.bliinkAd = bliinkAd?.extras?.transaction_id
  }
}

if (!isScriptLoaded(bliinkAd)) {
  const script = createScriptElement(bliinkAd)
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(script)
  })
} else {
  sendEventWithToken("custom", bliinkAd.token, "scriptLoaded")
}
