{
    "name":"interview",
    "fields":[
        {
            "label":"Введите своё ФИО",
            "input":{
                "type":"text",
                "required":true,
                "placeholder":"Иванов Иван Иванович"
            }
        },
        {
          "label":"Введите Номер телефона",
          "input":{
              "type":"number",
              "required":true,
              "mask": "+7 (999) 99-99-999"
          }
        },
        {
          "label":"Введите свою Почту",
          "input":{
              "type":"email",
              "required":true,
              "placeholder":"example@mail.com"
          }
        },
        {
            "label":"Введите свой возраст",
            "input":{
                "type":"number",
                "required":true
            }
        },
        {
            "label":"Введите вашу специальность",
            "input":{
                "type":"text",
                "required":true
            }
        },
        {
            "label":"Выберете технологии, с которыми вы работали",
            "input":{
                "type":"technology",
                "required": true,
                "technologies": ["PHP", "JS", "Laravel", "Express.js", "Yii2", "HTML", "CSS", "Java"],
                "multiple": true
            }
        },
        {
            "label":"Ваш срок работы",
            "input":{
                "type":"number",
                "required": true
            }
        },
        {
            "label":"Ваша фотография",
            "input":{
                "type":"file",
                "required":true
            }
        },
        {
            "label":"Серия, номер",
            "input":{
                "type": "number",
                "required": true,
                "mask": "99-99 999999"
            }
        },
        {
            "label":"Код подразделения",
            "input":{
                "type": "number",
                "required": true,
                "mask": "999-999"
            }
        },
        {
            "label":"Скан / Фото паспорта (1 страница)",
            "input":{
                "type": "file",
                "required": true,
                "multiple": true,
                "filetype": ["png", "jpeg", "pdf"]
            }
        },
        {
            "label":"Расскажите немного о себе",
            "input":{
                "type":"textarea",
                "required:":true
            }
        }
    ],
    "references":[
        {
          "input":{
            "type":"checkbox",
            "required":true,
            "checked":"false"
          }
        },
        {
            "text without ref":"I accept the",
            "text":"Terms & Conditions",
            "ref":"termsandconditions"
        }
    ],
    "buttons":[
        {
            "text":"Send"
        },
        {
            "text":"Cancel"
        }
    ]
}
