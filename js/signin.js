{
    "name":"login",
    "fields":[
        {
            "label":"Enter your login or email",
            "input":{
                "type":"text",
                "required":true,
                "placeholder": "login or email"
            }
        },
        {
            "label":"Enter your password",
            "input":{
                "type":"password",
                "required":true,
                "placeholder": "password"
            }
        }
    ],
    "references":[
        {
            "text":"Forgot password?",
            "ref":"rememberpassword"
        },
        {
            "text":"Create new account",
            "ref":"signup"
        }
    ],
    "buttons":[
        {
            "text":"Login"
        }
    ]
}