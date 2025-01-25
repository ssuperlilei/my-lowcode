import { configProviderProps } from 'ant-design-vue/es/config-provider/context';
import type { ExtractPropTypes, Ref } from 'vue';
import initDefaultProps from '../../../utils/initDefaultProps';

export interface ConfigProviderInjection {
  clsPrefixRef: Ref<string>;
}

// props 对象
export const bmConfigProviderProps = {
  ...initDefaultProps(configProviderProps(), {}),
  lang: {
    type: String,
    default: 'zh_CN'
  }

};

export type BMConfigProviderProps = Partial<
  ExtractPropTypes<typeof bmConfigProviderProps>
>;
