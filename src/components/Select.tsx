import { Dispatch, SetStateAction } from "react";

export interface itemProps{
  val: string;
  name: string;
}

interface selectProps {
  title?: string;
  id: string;
  name?: string;
  items: itemProps[];
  disabled?: boolean;
  defaultValue?: string | number;
  onChange?: Dispatch<SetStateAction<any>>
}


export function Select (props: selectProps){  
  const { id, title, disabled, defaultValue, onChange, items } = props;
  const defProps = { id, title, disabled, defaultValue, onChange }
  const listItems = items.map((items) => {
    let { val, name } = items;
    
    return (
      <option value={val} key={`${id}-${val}`}>
        {name}
      </option>
    )
  });


  return (  
    <select {...defProps}>
      {listItems}
    </select>
  )
}

Select.defaultProps = {
  id: 'test',
  items: [
    {
      val: 'default',
      name: 'TEST'
    }
  ]
};