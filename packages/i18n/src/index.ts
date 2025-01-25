import type { InitOptions, TOptions } from 'i18next'
import type { I18nLanguageType } from './types'
import i18next from 'i18next'
import { I18nLanguageEnum } from './types'

export * from './types'

// 默认值
const DEFAULTlng = I18nLanguageEnum.ZH_CN

// 创建一个I18n类，用于封装i18nNext的初始化和配置
class I18n {
  private static instance: I18n
  private options: InitOptions = {}

  private constructor(options: InitOptions) {
    this.options = {
      lng: DEFAULTlng,
      defaultNS: 'translation',
      ...options,
    }
    this.init()
  }

  // 获取单例实例
  public static getInstance(options?: InitOptions): I18n {
    if (I18n.instance == null) {
      I18n.instance = new I18n(options || {})
    } else if (options) {
      if (options.lng != null && options.lng !== '') {
        I18n.instance.changeLanguage(options.lng as I18nLanguageType)
      }
      if (options.resources) {
        Object.keys(options.resources).forEach((lng) => {
          I18n.instance.setResources(lng as I18nLanguageType, options.resources?.[lng])
        })
      }
    }
    return I18n.instance
  }

  // 初始化i18nNext
  private async init() {
    await i18next.init(this.options)
  }

  // 获取当前语言
  public getLanguage() {
    return i18next.language || DEFAULTlng
  }

  // 切换语言
  public async changeLanguage(lng: I18nLanguageType) {
    await i18next.changeLanguage(lng || DEFAULTlng)
  }

  // 设置资源
  public setResources(lng: I18nLanguageType, resources: any) {
    i18next.addResourceBundle(lng, 'translation', resources, true, true)
  }

  // 获取资源
  public getResources(lng: I18nLanguageType): Record<string, any> | undefined {
    return i18next.getResourceBundle(lng, 'translation') as Record<string, any> | undefined
  }

  // 翻译文本
  public t(key: string, options?: any): string {
    if (!key)
      return ''
    if (!i18next.exists(key)) {
      const obj = i18next.getResourceBundle(i18next.language, 'translation') as Record<string, any> | undefined
      const translationObj = obj?.translation as Record<string, any> | undefined
      if (translationObj && translationObj[key] !== undefined) {
        return (obj?.translation?.[key] as string) ?? ''
      }
      console.error(`i18n: ${key} not exists!`)
    }
    return (i18next.t(key, options as TOptions) || key)
  }

  // 特殊翻译文本
  public customizeT(key: string, options?: any): string | boolean {
    if (!key)
      return false
    if (i18next.exists(key)) {
      return i18next.t(key, options as TOptions)
    } else if (i18next.language) {
      const obj = i18next.getResourceBundle(i18next.language, 'translation') as Record<string, any> | undefined
      if (obj?.translation && (key in obj.translation)) {
        return (obj?.translation?.[key] as string) ?? ''
      }
    }
    console.error(`i18n: ${key} not exists!`)
    return false
  }
}

/**
 * @description 初始化i18n
 * @param {InitOptions} options i18n初始化配置
 */
export const init = (options: InitOptions) => {
  I18n.getInstance(options)
}

/**
 * @description 切换语言
 * @param {I18nLanguageType} lng 语言
 */
export const changeLanguage = async (lng: I18nLanguageType) => {
  await I18n.getInstance().changeLanguage(lng)
}

/**
 * @description 翻译文本
 * @param {string} key 翻译的key
 * @param {any} [options] 翻译选项
 */
export const t = (key: string, options?: any): string => {
  return I18n.getInstance().t(key, options)
}

/**
 * @description 特殊翻译文本
 * @param {string} key 翻译的key
 * @param {any} [options] 翻译选项
 */
export const customizeT = (key: string, options?: any): string | boolean => {
  return I18n.getInstance().customizeT(key, options)
}

/**
 * @description 获取当前语言
 * @returns {string} 当前语言
 */
export const getLanguage = () => {
  return I18n.getInstance().getLanguage()
}

export default {
  init,
  changeLanguage,
  t,
  customizeT,
  getLanguage,
}

// 使用示例
// import { t, changeLanguage, init } from '@bmos/i18n';
//   init({
//     lng: 'zh-CN',
//   });
