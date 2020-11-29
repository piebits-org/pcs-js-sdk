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
      url: 'http://localhost:4000'
    }
  }

  public configure (config: config) {
    this._config = config
  }

  public google (googleauthconfig: googleauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/google`,
      googleauthconfig,
      { headers: { 'x-pcs-app': this._config.app.name } }
    )
  }

  public facebook (facebookauthconfig: facebookauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/facebook`,
      facebookauthconfig,
      { headers: { 'x-pcs-app': this._config.app.name } }
    )
  }

  public emailpass_signup (emailpassauthconfig: emailpassauthconfigSIGNUP): Promise<object> {
    return axios.post(
      `${this._config.app.url}/emailpass/signup`,
      emailpassauthconfig,
      { headers: { 'x-pcs-app': this._config.app.name } }
    )
  }

  public emailpass_login (emailpassauthconfig: emailpassauthconfigLOGIN): Promise<object> {
    return axios.post(
      `${this._config.app.url}/emailpass/login`,
      emailpassauthconfig,
      { headers: { 'x-pcs-app': this._config.app.name } }
    )
  }
}