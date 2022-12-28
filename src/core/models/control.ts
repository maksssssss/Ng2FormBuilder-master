export interface Control {
  icon?: string
  label?: string
  class?: string,
  value?: any,
  isEdit?: boolean,
  src?: string, // For PDF file only
  zoom?: number, // For PDF file only
  min?: number,
  max?: number,
  maxLength?: number,
  tooltip?: string,
  options?: {
    label: string,
    value: string | number,
    selected: boolean,
  }[],
  type: 'email' | 'password' | 'text' | 'number' | 'date' | 'time' | 'select' | 'autocomplete' | 'checkbox-group' | 'radio-group' | 'pdf' | 'table',
}
