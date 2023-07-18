;(function () {
  var a =
      'eyJ0YWdfaW5mb3MiOnsiZm9ybWF0IjozLCJkaXNwbGF5X3R5cGUiOiJzdGlja3kifSwiY3JlYXRpdmUiOnsiYmFubmVyIjp7ImhlaWdodCI6MjAwLCJ3aWR0aCI6NDAwLCJhZG0iOiJcdTAwM2NpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jcmVhdGl2ZS1zdGcuYmxpaW5rLmlvL3N3aXRjaF90ZXN0L2luZGV4Lmh0bWw/Y2I9MTY4OTYwNDc2OVx1MDAyNmdkcHI9MVx1MDAyNmdkcHJfY29uc2VudD1cdTAwMjZpc1N0aWNreT10cnVlXHUwMDI2aXNQcmViaWQ9ZmFsc2UjY2xpY2s9aHR0cHM6Ly9lLXN0Zy5hcGkuYmxpaW5rLmlvL2M/dG9rZW49ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMk9UQXlPVEEyTnpjc0ltbGhkQ0k2TVRZNE9UWTROVGczTnl3aWFYTnpJam9pWW14cGFXNXJJaXdpWkdGMFlTSTZleUowZVhCbElqb2lZV1F0YzJWeWRtVnlJaXdpZEhKaGJuTmhZM1JwYjI1SlpDSTZJakppTkdFd05UQTBaRE0yT1dSaElpd2libVYwZDI5eWEwbGtJam95TVN3aWMybDBaVWxrSWpvME9Dd2lkR0ZuU1dRaU9qZ3hMQ0psZG1WdWRFbGtJam96TENKMFlYSm5aWFJwYm1jaU9uc2ljR3hoZEdadmNtMGlPaUpOYjJKcGJHVWdWMlZpYzJsMFpTSXNJbXRsZVhkdmNtUWlPaUpDYkdscGJtc3NVMkZpWlhJc1VISmxZbWxrSWl3aWNtVm1aWEp5WlhJaU9pSm9kSFJ3Y3pvdkwzQnlaV0pwWkMxemRHY3VZbXhwYVc1ckxtbHZMeUlzSW5CaFoyVlZjbXdpT2lKb2RIUndjem92TDNCeVpXSnBaQzF6ZEdjdVlteHBhVzVyTG1sdkwzQnlaV0pwWkM1b2RHMXNJaXdpZEdsdFpTSTZNVFk0T1RZNE5UZzNOaXdpYkc5allYUnBiMjRpT25zaWJHRjBhWFIxWkdVaU9qUTNMak14TVN3aWJHOXVaMmwwZFdSbElqb3lMamM1T0RJc0luSmxaMmx2YmlJNklrTldUQ0lzSW1OdmRXNTBjbmtpT2lKR1VpSXNJbU5wZEhraU9pSkNkV1VpTENKNmFYQkRiMlJsSWpvaU1UZ3pNREFpTENKa1pYQmhjblJ0Wlc1MElqb2lNVGdpZlN3aVkybDBlU0k2SWtKMVpTSXNJbU52ZFc1MGNua2lPaUpHVWlJc0ltbHVkR1Z5Ym1WMFEyOXVibVZqZEdsdmJsUjVjR1VpT2lKMWJtdHViM2R1SWl3aVpHVjJhV05sVDNNaU9pSnBUMU1pTENKa1pYWnBZMlZOYjJSbGJDSTZJbWxRYUc5dVpTSXNJbVJsZG1salpWQnNZWFJtYjNKdElqb2lUVzlpYVd4bElGZGxZbk5wZEdVaUxDSnlZWGRWYzJWeVFXZGxiblFpT2lKTmIzcHBiR3hoTHpVdU1DQW9hVkJvYjI1bE95QkRVRlVnYVZCb2IyNWxJRTlUSURFelh6SmZNeUJzYVd0bElFMWhZeUJQVXlCWUtTQkJjSEJzWlZkbFlrdHBkQzgyTURVdU1TNHhOU0FvUzBoVVRVd3NJR3hwYTJVZ1IyVmphMjhwSUZabGNuTnBiMjR2TVRNdU1DNHpJRTF2WW1sc1pTOHhOVVV4TkRnZ1UyRm1ZWEpwTHpZd05DNHhJbjBzSW1ka2NISWlPbnNpYUdGelEyOXVjMlZ1ZENJNlptRnNjMlVzSW1OdmJuTmxiblJUZEhKcGJtY2lPaUpEVUZsNlpEQkJVRmw2WkRCQlFVaEJRa0pGVGtOUFEzTkJVRjlCUVVGQlFVRkJRVUZKZFhSbVgxaGlNMTlxTFRWME1HVlpNV1k1WHpjdE1IcHFhR1prY0MwNFRqTm1YMWhmVERoWVh6Sk5OM1pHTXpad2NUUkxkVkkwUlhVelRFSkpVV1JzU0U5SVkxUlZiWGMyYjJ0V2NucFFjMkpyTW1OeU4wNUxTamRRUlcxdVRXSmxNbVJaUjBnNWJqa3pWQzFhUzFrM0xWODNOeTFmWmkxbU5UTXRMVjlpWDFaZk9UazNZbTQ1WHpsZlVGODVkamhmZGw5Zk5FRkJRVU5SYTBGSFFVRkpTWFZvYjBGTlFVRlJVbVJGVVVGWlFVRm5hVFpMWjBGM1FVSkNSakJhUVVKblFVTkRURzgyUVVSQlFVVkZXRk5GUVVkQlFVbEpkV3R2UVUxQlFWRlNaRXRSUVZsQlFXZHBOa0ZCUVM1bVgyZEJRVUZCUVVGQlFVRWlmU3dpYm5BaU9pSTBZMEkwZFdGQmJtZHdXV0puUkZGaGVXSlFZV2RSUFQwaUxDSm5jQ0k2SWpjclRsUldNU3NyUzIxYWQyUndPRzVOVjNjMGFYYzlQU0lzSW1WdVkwUmxiU0k2SWtGNVdFbEVjRTUzYURreVdVTTFhVkJqZDJkSGVuYzlQU0lzSW1ac1lXZHpJam8wTENKamRYSnlaVzVqZVNJNklrVlZVaUlzSW5kcGJpSTZabUZzYzJVc0ltWnZjbTFoZENJNk15d2laR2x6Y0d4aGVWUjVjR1VpT2lKemRHbGphM2tpTENKaFpFbGtJam95TVRrc0ltRmtkbVZ5ZEdselpYSkpaQ0k2TWpFc0ltTmhiWEJoYVdkdVNXUWlPalV6Tml3aVkzSmxZWFJwZG1WSlpDSTZNVFUyTENKbGNuSnZjaUk2Wm1Gc2MyVjlmUS5SSzlxZ05MZS1jc204SkNEZkFobV96ajNqMHZLZnBkQzdNRlRyQVFHUDdJXHUwMDI2cmVkaXJlY3Q9XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBib3JkZXI6IDA7XCJcdTAwM2VcdTAwM2MvaWZyYW1lXHUwMDNlXHUwMDNjc2NyaXB0IHNyYz1cImh0dHBzOi8vdGFnLXN0Zy5ibGlpbmsuaW8vY3JlYXRpdmUubWluLmpzP2NiPTAuMC4wXCJcdTAwM2VcdTAwM2Mvc2NyaXB0XHUwMDNlXHUwMDNjaW1nIHNyYz0naHR0cHM6Ly9lLXN0Zy5hcGkuYmxpaW5rLmlvL2kuZ2lmP25hbWU9aW1wcmVzc2lvblx1MDAyNnRva2VuPWV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsZUhBaU9qRTJPVEF5T1RBMk56Y3NJbWxoZENJNk1UWTRPVFk0TlRnM055d2lhWE56SWpvaVlteHBhVzVySWl3aVpHRjBZU0k2ZXlKMGVYQmxJam9pWVdRdGMyVnlkbVZ5SWl3aWRISmhibk5oWTNScGIyNUpaQ0k2SWpKaU5HRXdOVEEwWkRNMk9XUmhJaXdpYm1WMGQyOXlhMGxrSWpveU1Td2ljMmwwWlVsa0lqbzBPQ3dpZEdGblNXUWlPamd4TENKbGRtVnVkRWxrSWpvekxDSjBZWEpuWlhScGJtY2lPbnNpY0d4aGRHWnZjbTBpT2lKTmIySnBiR1VnVjJWaWMybDBaU0lzSW10bGVYZHZjbVFpT2lKQ2JHbHBibXNzVTJGaVpYSXNVSEpsWW1sa0lpd2ljbVZtWlhKeVpYSWlPaUpvZEhSd2N6b3ZMM0J5WldKcFpDMXpkR2N1WW14cGFXNXJMbWx2THlJc0luQmhaMlZWY213aU9pSm9kSFJ3Y3pvdkwzQnlaV0pwWkMxemRHY3VZbXhwYVc1ckxtbHZMM0J5WldKcFpDNW9kRzFzSWl3aWRHbHRaU0k2TVRZNE9UWTROVGczTml3aWJHOWpZWFJwYjI0aU9uc2liR0YwYVhSMVpHVWlPalEzTGpNeE1Td2liRzl1WjJsMGRXUmxJam95TGpjNU9ESXNJbkpsWjJsdmJpSTZJa05XVENJc0ltTnZkVzUwY25raU9pSkdVaUlzSW1OcGRIa2lPaUpDZFdVaUxDSjZhWEJEYjJSbElqb2lNVGd6TURBaUxDSmtaWEJoY25SdFpXNTBJam9pTVRnaWZTd2lZMmwwZVNJNklrSjFaU0lzSW1OdmRXNTBjbmtpT2lKR1VpSXNJbWx1ZEdWeWJtVjBRMjl1Ym1WamRHbHZibFI1Y0dVaU9pSjFibXR1YjNkdUlpd2laR1YyYVdObFQzTWlPaUpwVDFNaUxDSmtaWFpwWTJWTmIyUmxiQ0k2SW1sUWFHOXVaU0lzSW1SbGRtbGpaVkJzWVhSbWIzSnRJam9pVFc5aWFXeGxJRmRsWW5OcGRHVWlMQ0p5WVhkVmMyVnlRV2RsYm5RaU9pSk5iM3BwYkd4aEx6VXVNQ0FvYVZCb2IyNWxPeUJEVUZVZ2FWQm9iMjVsSUU5VElERXpYekpmTXlCc2FXdGxJRTFoWXlCUFV5QllLU0JCY0hCc1pWZGxZa3RwZEM4Mk1EVXVNUzR4TlNBb1MwaFVUVXdzSUd4cGEyVWdSMlZqYTI4cElGWmxjbk5wYjI0dk1UTXVNQzR6SUUxdlltbHNaUzh4TlVVeE5EZ2dVMkZtWVhKcEx6WXdOQzR4SW4wc0ltZGtjSElpT25zaWFHRnpRMjl1YzJWdWRDSTZabUZzYzJVc0ltTnZibk5sYm5SVGRISnBibWNpT2lKRFVGbDZaREJCVUZsNlpEQkJRVWhCUWtKRlRrTlBRM05CVUY5QlFVRkJRVUZCUVVGSmRYUm1YMWhpTTE5cUxUVjBNR1ZaTVdZNVh6Y3RNSHBxYUdaa2NDMDRUak5tWDFoZlREaFlYekpOTjNaR016WndjVFJMZFZJMFJYVXpURUpKVVdSc1NFOUlZMVJWYlhjMmIydFdjbnBRYzJKck1tTnlOMDVMU2pkUVJXMXVUV0psTW1SWlIwZzViamt6VkMxYVMxazNMVjgzTnkxZlppMW1OVE10TFY5aVgxWmZPVGszWW00NVh6bGZVRjg1ZGpoZmRsOWZORUZCUVVOUmEwRkhRVUZKU1hWb2IwRk5RVUZSVW1SRlVVRlpRVUZuYVRaTFowRjNRVUpDUmpCYVFVSm5RVU5EVEc4MlFVUkJRVVZGV0ZORlFVZEJRVWxKZFd0dlFVMUJRVkZTWkV0UlFWbEJRV2RwTmtGQlFTNW1YMmRCUVVGQlFVRkJRVUVpZlN3aWJuQWlPaUkwWTBJMGRXRkJibWR3V1dKblJGRmhlV0pRWVdkUlBUMGlMQ0puY0NJNklqY3JUbFJXTVNzclMyMWFkMlJ3T0c1TlYzYzBhWGM5UFNJc0ltVnVZMFJsYlNJNklrRjVXRWxFY0U1M2FEa3lXVU0xYVZCamQyZEhlbmM5UFNJc0ltWnNZV2R6SWpvMExDSmpkWEp5Wlc1amVTSTZJa1ZWVWlJc0luZHBiaUk2Wm1Gc2MyVXNJbVp2Y20xaGRDSTZNeXdpWkdsemNHeGhlVlI1Y0dVaU9pSnpkR2xqYTNraUxDSmhaRWxrSWpveU1Ua3NJbUZrZG1WeWRHbHpaWEpKWkNJNk1qRXNJbU5oYlhCaGFXZHVTV1FpT2pVek5pd2lZM0psWVhScGRtVkpaQ0k2TVRVMkxDSmxjbkp2Y2lJNlptRnNjMlY5ZlEuUks5cWdOTGUtY3NtOEpDRGZBaG1femozajB2S2ZwZEM3TUZUckFRR1A3SVx1MDAyNmNiPTE2ODk2ODU4NzcxNDI1MjU4ODMnIGJvcmRlcj0nMCcgaGVpZ2h0PScxJyB3aWR0aD0nMSdcdTAwM2UifSwibWVkaWFfdHlwZSI6ImJhbm5lciJ9LCJwcmljZSI6OCwidG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGVIQWlPakUyT1RBeU9UQTJOemNzSW1saGRDSTZNVFk0T1RZNE5UZzNOeXdpYVhOeklqb2lZbXhwYVc1cklpd2laR0YwWVNJNmV5SjBlWEJsSWpvaVlXUXRjMlZ5ZG1WeUlpd2lkSEpoYm5OaFkzUnBiMjVKWkNJNklqSmlOR0V3TlRBMFpETTJPV1JoSWl3aWJtVjBkMjl5YTBsa0lqb3lNU3dpYzJsMFpVbGtJam8wT0N3aWRHRm5TV1FpT2pneExDSmxkbVZ1ZEVsa0lqb3pMQ0owWVhKblpYUnBibWNpT25zaWNHeGhkR1p2Y20waU9pSk5iMkpwYkdVZ1YyVmljMmwwWlNJc0ltdGxlWGR2Y21RaU9pSkNiR2xwYm1zc1UyRmlaWElzVUhKbFltbGtJaXdpY21WbVpYSnlaWElpT2lKb2RIUndjem92TDNCeVpXSnBaQzF6ZEdjdVlteHBhVzVyTG1sdkx5SXNJbkJoWjJWVmNtd2lPaUpvZEhSd2N6b3ZMM0J5WldKcFpDMXpkR2N1WW14cGFXNXJMbWx2TDNCeVpXSnBaQzVvZEcxc0lpd2lkR2x0WlNJNk1UWTRPVFk0TlRnM05pd2liRzlqWVhScGIyNGlPbnNpYkdGMGFYUjFaR1VpT2pRM0xqTXhNU3dpYkc5dVoybDBkV1JsSWpveUxqYzVPRElzSW5KbFoybHZiaUk2SWtOV1RDSXNJbU52ZFc1MGNua2lPaUpHVWlJc0ltTnBkSGtpT2lKQ2RXVWlMQ0o2YVhCRGIyUmxJam9pTVRnek1EQWlMQ0prWlhCaGNuUnRaVzUwSWpvaU1UZ2lmU3dpWTJsMGVTSTZJa0oxWlNJc0ltTnZkVzUwY25raU9pSkdVaUlzSW1sdWRHVnlibVYwUTI5dWJtVmpkR2x2YmxSNWNHVWlPaUoxYm10dWIzZHVJaXdpWkdWMmFXTmxUM01pT2lKcFQxTWlMQ0prWlhacFkyVk5iMlJsYkNJNkltbFFhRzl1WlNJc0ltUmxkbWxqWlZCc1lYUm1iM0p0SWpvaVRXOWlhV3hsSUZkbFluTnBkR1VpTENKeVlYZFZjMlZ5UVdkbGJuUWlPaUpOYjNwcGJHeGhMelV1TUNBb2FWQm9iMjVsT3lCRFVGVWdhVkJvYjI1bElFOVRJREV6WHpKZk15QnNhV3RsSUUxaFl5QlBVeUJZS1NCQmNIQnNaVmRsWWt0cGRDODJNRFV1TVM0eE5TQW9TMGhVVFV3c0lHeHBhMlVnUjJWamEyOHBJRlpsY25OcGIyNHZNVE11TUM0eklFMXZZbWxzWlM4eE5VVXhORGdnVTJGbVlYSnBMell3TkM0eEluMHNJbWRrY0hJaU9uc2lhR0Z6UTI5dWMyVnVkQ0k2Wm1Gc2MyVXNJbU52Ym5ObGJuUlRkSEpwYm1jaU9pSkRVRmw2WkRCQlVGbDZaREJCUVVoQlFrSkZUa05QUTNOQlVGOUJRVUZCUVVGQlFVRkpkWFJtWDFoaU0xOXFMVFYwTUdWWk1XWTVYemN0TUhwcWFHWmtjQzA0VGpObVgxaGZURGhZWHpKTk4zWkdNelp3Y1RSTGRWSTBSWFV6VEVKSlVXUnNTRTlJWTFSVmJYYzJiMnRXY25wUWMySnJNbU55TjA1TFNqZFFSVzF1VFdKbE1tUlpSMGc1YmprelZDMWFTMWszTFY4M055MWZaaTFtTlRNdExWOWlYMVpmT1RrM1ltNDVYemxmVUY4NWRqaGZkbDlmTkVGQlFVTlJhMEZIUVVGSlNYVm9iMEZOUVVGUlVtUkZVVUZaUVVGbmFUWkxaMEYzUVVKQ1JqQmFRVUpuUVVORFRHODJRVVJCUVVWRldGTkZRVWRCUVVsSmRXdHZRVTFCUVZGU1pFdFJRVmxCUVdkcE5rRkJRUzVtWDJkQlFVRkJRVUZCUVVFaWZTd2libkFpT2lJMFkwSTBkV0ZCYm1kd1dXSm5SRkZoZVdKUVlXZFJQVDBpTENKbmNDSTZJamNyVGxSV01Tc3JTMjFhZDJSd09HNU5WM2MwYVhjOVBTSXNJbVZ1WTBSbGJTSTZJa0Y1V0VsRWNFNTNhRGt5V1VNMWFWQmpkMmRIZW5jOVBTSXNJbVpzWVdkeklqbzBMQ0pqZFhKeVpXNWplU0k2SWtWVlVpSXNJbmRwYmlJNlptRnNjMlVzSW1admNtMWhkQ0k2TXl3aVpHbHpjR3hoZVZSNWNHVWlPaUp6ZEdsamEza2lMQ0poWkVsa0lqb3lNVGtzSW1Ga2RtVnlkR2x6WlhKSlpDSTZNakVzSW1OaGJYQmhhV2R1U1dRaU9qVXpOaXdpWTNKbFlYUnBkbVZKWkNJNk1UVTJMQ0psY25KdmNpSTZabUZzYzJWOWZRLlJLOXFnTkxlLWNzbThKQ0RmQWhtX3pqM2owdktmcGRDN01GVHJBUUdQN0kiLCJtb2RlIjoiYWQiLCJleHRyYXMiOnsiZGVhbF9pZCI6IjE1NiIsInRyYW5zYWN0aW9uX2lkIjoiMmI0YTA1MDRkMzY5ZGEiLCJjcmVhdGl2ZSI6eyJhZF9pZCI6MjE5LCJjYXRlZ29yeSI6MiwidHlwZSI6MSwidmlld2FiaWxpdHlfZHVyYXRpb24iOjEsInZpZXdhYmlsaXR5X3BlcmNlbnRfaW5fdmlldyI6MzB9fSwiY3VycmVuY3kiOiJFVVIifQ==',
    b = 'IN_SCREEN',
    c = 'https://prebid-stg.bliink.io',
    d = 1
  !window.fetch &&
    (function (f) {
      window.fetch = function (g) {
        return new Promise(function (h, i) {
          var j = new XMLHttpRequest()
          j.open('GET', g),
            (j.onload = function () {
              j.status === 200
                ? h(new Response(j.responseText, { status: j.status }))
                : i(new Error(j.statusText))
            }),
            (j.onerror = function () {
              i(new Error('Network Error'))
            }),
            j.send()
        })
      }
    })(),
    !window.atob &&
      (function () {
        var f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        window.atob = function (g) {
          g = String(g).replace(/=+$/, '')
          for (
            var h, i = 0, j = 0, k = '';
            (h = g.charAt(j++));
            ~h &&
            ((i = 64 * i + f.indexOf(h)), j & 3) &&
            (k += String.fromCharCode(255 & (i >> ((-2 * j) & 6))))
          );
          return k
        }
      })()
  function e(f) {
    if (!f) return Promise.reject(new Error('Missing params'))
    var g = 'https://e.api.bliink.io/i.gif?token=' + f + '&name=custom&label=scriptLoaded'
    return fetch(g).then(function (h) {
      if (!h.ok) throw new Error('Response not OK')
    })
  }
  var i = function (f) {
      return JSON.parse(atob(f))
    },
    j = function () {
      return window.self
    },
    k = function () {
      return window.top
    },
    l = function () {
      try {
        return k().location.href, !0
      } catch (m) {
        return console.log("can't access top", m), !1
      }
    },
    n = function () {
      return l() ? k() : j()
    },
    o = function () {
      var f = j()
      return !!(f.$sf && f.$sf.ext)
    },
    p = function (f) {
      return !!n().document.querySelector('[data-id="' + f.extras.transaction_id + '"]')
    },
    q = function () {
      try {
        var f = i(a)
        if (!f) throw new Error('No Ad found on document.currentScript.dataset.ad')
        return { ad: f, adm: a }
      } catch (r) {
        return console.log('error getting currentScript.dataset.ad', r), { ad: null, adm: null }
      }
    },
    s = function (f, g, h) {
      h
        ? window.top.document.body.appendChild(f)
        : document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(f)
          })
    },
    w = function (f, g, h) {
      var i = document.createElement('script')
      return (
        (i.dataset.id = f.extras.transaction_id),
        (i.type = 'text/javascript'),
        (i.async = !0),
        (i.src = c + '/creative.js?cb=' + d),
        (i.dataset.ad = g),
        (i.dataset.format = h ? 'sticky' : ''),
        i
      )
    },
    r = function (f, g) {
      return !o() && l() && 'IN_SCREEN' === b
    }
  var C = q(),
    D = C.ad,
    E = C.adm
  if (D && D.creative) {
    if (l()) {
      var F = window.top.bliinkLoadedAds || {},
        G = { window: j() }
      ;(G.isIframe = !!window.frameElement),
        (F['bliink_ad_' + D.extras.transaction_id] = G),
        (window.top.bliinkLoadedAds = F),
        G.isIframe ||
          (document.currentScript.parentElement.classList.add(
            'bliink_ad_' + D.extras.transaction_id
          ),
          (document.currentScript.parentElement.dataset.bliinkAd = D.extras.transaction_id))
    }
    if (!p(D)) {
      var H = r(D),
        I = w(D, E, H)
      s(I, H)
    } else e(D.token)
  }
})()
