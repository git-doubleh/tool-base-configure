/*
 * @Description: 
 * @Date: 2022-10-18 11:51:23
 * @LastEditTime: 2022-10-18 15:45:01
 */
/**
 * 智图软件下载地址 https://zhitu.isux.us/
 * 通过该指令，如果dom有 src 属性，会将 src 重新定位到原路径的  webp/imgName.webp
 * 例如 /newoffline/static/images/offline-icon.png => /newoffline/static/images/webp/offline-icon.webp
 * 如果没有 src 属性，会在 dom 上加一个 webp class。可以通过样式文件制定 webp 图片地址
 * 也可以 用 v-webp="require('@/assets/img/bg1.png')" 来指定 webp 图片地址
 * 如果是背景图片也可以 用 v-webp:bg="require('@/assets/img/bg1.png')" 来指定 webp 图片地址
 */
function canUseWebP() {
    // webp.js 判断是否支持webp
    let supportWebP = false

    let elem = document.createElement('canvas')

    if (elem.getContext && elem.getContext('2d')) {
        // was able or not to get WebP representation
        supportWebP = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    } else {
        // very old browser like IE 8, canvas not supported
        supportWebP = false
    }
    return supportWebP
}
function isBase64(val) {
    return val.indexOf("data:image") > -1
}
export default {
    inserted(el, binding) {
        if (canUseWebP()) {
            if (binding.value) {
                const value = binding.value
                if (!isBase64(value)) {
                    let lastPathIndex = value.indexOf('.')
                    let webpPath = require(`@/assets${value.substr(0, lastPathIndex)}.webp`)
                    if (binding.arg === 'bg') {
                        el.style.backgroundImage = "url(" + webpPath + ")";
                    } else {
                        el.src = webpPath
                    }
                } else {
                    el.src = value
                }
            } else if (!el.src && el.classList) {
                el.classList.add('webp')
            }
        } else {
            el.src = binding.value
        }
    }
}