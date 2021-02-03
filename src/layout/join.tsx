import { useState } from 'react';
import { Select, itemProps } from '../components/Select'
import { Field } from '../components/Field'
import { chekPassword, setAuthentication } from '../components/Utils'
import "../styles.css";

// static data
const createData = (max:number, t: string, start?: number): itemProps[] => {
  let z = start || 1, arr: itemProps[] = [];
  while(z <= max) {
    arr.push({ val: `${z}`, name: `${z}${t}`})    
    z++;
  }
  return arr;
}
const YEAR = (() => createData(2020, '년', 1960))();
const MONTHS = (() => createData(12, '월'))();
const DATE = (() => createData(31, '일'))();

export function Join() {
  const [year, setYear] = useState('2000');
  const [month, setMonth] = useState('1');
  const [date, setDate] = useState('2');
  const [phoneProvider, setPhoneProvider] = useState('010');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [phone, setPhone] = useState('');
  const [screenNumber, setScreenNumber] = useState(''); // 인증번호  
  const [agree, setAgree] = useState(true);

  return (
    <div className="join">
      <h1>회원가입</h1>
      <form method="post" action="#">
      <fieldset>
      <legend>회원가입 입력 양식</legend>
      <div>
        <div>
          <Field id="id-field" title="아이디를 입력하세요" placeholder="아이디" onChange={(e)=> setId(e.target.value)} value={id} />
        </div>
        <div>
          <Field type='password' id="pw-field" title="비밀번호를 입력하세요" placeholder="비밀번호"
            onChange={(e)=> setPw(e.target.value)} 
            value={pw}           
            helper={chekPassword(pw, id)} 
          />
        </div>
      </div>

      <div>
        <label htmlFor="rd-male">남자</label>
        <Field id="rd-male" defaultChecked="rd-male" name="gender" type="radio" value="male" />
        <label htmlFor="rd-female">여자</label>
        <Field id="rd-female" name="gender" type="radio" value="female" />
      </div>


      <div>
        <label htmlFor="year">생일</label>
        <Select onChange={(e) => setYear(e.target.value)} id='year' defaultValue={year} items={YEAR} />
        <Select onChange={(e) => setMonth(e.target.value)} id='month' title="월 선택" defaultValue={month} items={MONTHS} />
        <Select onChange={(e) => setDate(e.target.value)} defaultValue={date} id='date' title="날짜 선택" items={DATE} />        
      </div>


      <div>
        <label htmlFor="tel">전화</label>
        <Select id='tel'
          onChange={setPhoneProvider} 
          defaultValue={phoneProvider}          
          items={[ { val: '010', name: '010' }]}
        />
        <Field type="tel" id="tel-field" title="휴대전화 뒷자리" maxLength={8} onChange={(e) => setPhone(e.target.value)} value={phone} />
        <button className="setAuthentication" aria-expanded="false" aria-controls="screen-field" onClick={(e) => setAuthentication(e)}>인증</button>
        <div>
          <Field id="screen-field" title="인증번호를 입력하세요" type="tel" onChange={(e) => setScreenNumber(e.target.value)} value={screenNumber} />
        </div>
      </div>

      <div>
        <label htmlFor="agree">모든 약관 내용에 동의 합니다.</label>
        <Field id="agree"  type="checkbox" onChange={() => setAgree(!agree)}  />
      </div>

      <button type="submit">가입하기</button>
      </fieldset>
      </form>


    </div>
  );
}
