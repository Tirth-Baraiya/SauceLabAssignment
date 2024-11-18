import { $ } from '@wdio/globals'


const dashboardlement = '//android.widget.TextView[@text="PRODUCTS"]'
const burgerbuttonelement = '//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView'
const logoutelement = '//android.widget.TextView[@text="LOGOUT"]'

class DashboardPage {

    public get dashboardElement () {
        return $(dashboardlement);
    }

    private get burgerelement(){
        return $(burgerbuttonelement);
    }
   
    private get logoutelemnt(){
        return $(logoutelement);
    }
    public async burgerbutton(){
        await this.burgerelement.click();
    }

    public async logoutbutton(){
        await this.logoutelemnt.click();
    }
}

export default new DashboardPage();