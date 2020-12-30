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
      url: 'https://easeauth.cloud.piebits.org'
    }
  }

  public configure (config: config) {
    this._config = config
  }

  public getuser (accessToken: string): Promise<object> {
    return new Promise ((resolve, reject) => {
      axios.get(
        `${this._config.app.url}/actions/fetch/user`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'x-pc-app': this._config.app.name
          }
        }
      )
        .then(({ data }) => {
          var u = {
            id: data._id,
            provider: data.provider,
            status: data.status,
            ...data.data
          }
          resolve(u)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  public logout (refreshToken: string): Promise<object> {
    return axios.post(
      `${this._config.app.url}/actions/logout`,
      { refreshToken },
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }

  public refresh (refreshToken: string): Promise<object> {
    return axios.post(
      `${this._config.app.url}/actions/refresh`,
      { refreshToken },
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }

  public google (googleauthconfig: googleauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/provider/google`,
      googleauthconfig,
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }

  public facebook (facebookauthconfig: facebookauthconfig): Promise<object> {
    return axios.post(
      `${this._config.app.url}/provider/facebook`,
      facebookauthconfig,
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }

  public emailpass_signup (emailpassauthconfig: emailpassauthconfigSIGNUP): Promise<object> {
    return axios.post(
      `${this._config.app.url}/provider/emailpass/signup`,
      emailpassauthconfig,
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }

  public emailpass_login (emailpassauthconfig: emailpassauthconfigLOGIN): Promise<object> {
    return axios.post(
      `${this._config.app.url}/provider/emailpass/signin`,
      emailpassauthconfig,
      { 
        headers: {
          'x-pc-app': this._config.app.name
        }
      }
    )
  }
}