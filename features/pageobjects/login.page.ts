import { $ } from '@wdio/globals'


const usernamelocator = '//android.widget.EditText[@content-desc="test-Username"]';
const passwordlocator = '//android.widget.EditText[@content-desc="test-Password"]';
const loginbtnlocator = '//android.view.ViewGroup[@content-desc="test-LOGIN"]';
const errorMessagelocator  = '//android.view.ViewGroup[@content-desc="test-Error message"]';


class LoginPage  {
   
    public get inputUsername () {
        return $(usernamelocator);
    }

    public get inputPassword () {
        return $(passwordlocator);
    }

    public get loginbtn () {
        return $(loginbtnlocator);
    }

    public get errorAlert () {
        return $(errorMessagelocator);
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        
    }
    
    public async loginButton(){
        await this.loginbtn.click();
    }

}

export default new LoginPage();