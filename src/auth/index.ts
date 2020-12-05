import axios from 'axios'
import { 
  googleauthconfig,
  facebookauthconfig,
  emailpassauthconfigSIGNUP,
  emailpassauthconfigLOGIN,
  config
} from './providerconfig'

export class AUTH {
  private _config: config = {
    app: {
      name: '',
      url: 'http://localhost:4000',
      usesrn: false
    }
  }

  public configure (config: config) {
    this._config = config
  }

  public getuser (accessToken: string): Promise<object> {
    return axios.get(
      `${this._config.app.url}/fetch/user`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public logout (refreshToken: string): Promise<object> {
    return axios.post(
      `${this._config.app.url}/logout`,
      { refreshToken },
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public refresh (refreshToken: string): Promise<object> {
    return axios.post(
      `${this._config.app.url}/refresh`,
      { refreshToken },
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public google (googleauthconfig: googleauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/google`,
      googleauthconfig,
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public facebook (facebookauthconfig: facebookauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/facebook`,
      facebookauthconfig,
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public emailpass_signup (emailpassauthconfig: emailpassauthconfigSIGNUP): Promise<object> {
    return axios.post(
      `${this._config.app.url}/emailpass/signup`,
      emailpassauthconfig,
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }

  public emailpass_login (emailpassauthconfig: emailpassauthconfigLOGIN): Promise<object> {
    return axios.post(
      `${this._config.app.url}/emailpass/login`,
      emailpassauthconfig,
      { 
        headers: {
          'x-pcs-app': this._config.app.name,
          'x-usesrn': this._config.app.usesrn
        }
      }
    )
  }
}