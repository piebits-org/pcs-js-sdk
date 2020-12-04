export interface config {
  app: {
    name: string,
    url: string,
    usesrn?: boolean
  }
}

export interface facebookauthconfig {
  token: string
}

export interface googleauthconfig {
  code: string
}

export interface emailpassauthconfigSIGNUP {
  email: string,
  password: string
}

export interface emailpassauthconfigLOGIN {
  email: string,
  password: string
}