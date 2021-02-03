import { Dispatch, SetStateAction } from "react";

export interface helper {
  str: string;
  flag: boolean;
}

interface fieldProps{
  id: string;
  name?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;  
  helper?: helper;
  title?: string;
  maxLength?: number;
  checked?: boolean;
  defaultChecked?: string;
  onChange?: Dispatch<SetStateAction<any>>;
}

export function Field (props: fieldProps){
  const { id, name, value, type, title, disabled, defaultChecked, onChange, maxLength, helper, placeholder } = props;
  const defProps = { id, name, value, type, title, disabled, placeholder, maxLength, onChange, defaultChecked: defaultChecked === id } 
  const draw = () => {
    if (helper && helper.flag) {
      return (
        <>
          <input {...defProps} aria-describedby={`${id}-helper`} />
          <div id={`${id}-helper`}>{helper.str}</div>
        </>
          )
    } else {
      return <input {...defProps} />
    }
  }

  return draw()
}

Field.defaultProps = {
  id: 'test-field',
  type: 'text',
  value: '',
  disabled: false
};