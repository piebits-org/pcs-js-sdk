export interface config {
  app: {
    name: string,
    url: string
  }
}

export interface facebookauthconfig {
  token: string,
  customData?: object
}

export interface googleauthconfig {
  code: string,
  customData?: object
}

export interface emailpassauthconfigSIGNUP {
  email: string,
  password: string,
  providerData?: object,
  customData?: object
}

export interface emailpassauthconfigLOGIN {
  email: string,
  password: string
}