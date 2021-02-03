import { helper } from './Field';

function chekPassword(pw: string, id: string): helper {
  let check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(pw);   //영문,숫자
  let check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,12}$/.test(pw);  //영문,특수문자
  let check3 = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{6,12}$/.test(pw);  //특수문자, 숫자
  let flag = false, str = '';

  if(pw.length < 6) {
    return { flag, str }
  }

	if(!(check1||check2||check3)){
    str = "6자~12자리의 영문(대소문자)+숫자+특수문자 중 2종류 이상을 조합하여 사용할 수 있습니다";    
    flag = true;
	}

	if(/(\w)\1\1/.test(pw)){
    str = '같은 문자를 3번 이상 사용하실 수 없습니다.\n패스워드 설정안내를 확인해 주세요.';
    flag = true;
	}

	if(id.length > 1 && pw.search(id) > -1){
    str = "비밀번호에 아이디가 포함되었습니다.\n패스워드 설정안내를 확인해 주세요.";
    flag = true;
  }
  return {
    str,
    flag
  }
}

function setAuthentication(e: any): void {
  e.preventDefault();
  console.log('인증번호가 발송 되었습니다.')
  e.target.setAttribute('aria-expanded', 'true');
  const target = <HTMLInputElement>document.getElementById('screen-field');
  if (target) {
    target.value = ''
    target.focus();
  }
}

export {
  chekPassword,
  setAuthentication
}