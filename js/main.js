"use strict"

document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('form')
let formFile = document.getElementById('fileInput')
const parse = document.getElementById('parse')
let content
let id = 0
let color

formFile.addEventListener('change', () => readFile(formFile))

function readFile(formFile) {
	let file = formFile.files[0]
	console.log('read')

	let reader = new FileReader();

	reader.readAsText(file);

	reader.onload = function() {
		console.log(reader.result);
		content = JSON.parse(reader.result)
	};

	reader.onerror = function() {
		console.log(reader.error);
	};
	}

form.addEventListener('submit', jsonParse)

function jsonParse(e) {
	console.log('submit')
	e.preventDefault()
	if (content) {
		bildHTML(content)
	} else {
		alert('Файл не загружен')
	}

	if (document.querySelector('.input-color')) {
	color = document.querySelector('.input-color')
	color.addEventListener('input', (e) => {
	console.log(color)
	document.body.style.color = e.target.value
})
	}
}

form.addEventListener('reset', () => {
	parse.innerHTML = ''
	content = {}
})

function bildHTML(content) {
	
	for (let field in content) {
		switch (field)
		{
			case 'name': {
				bildTitle(content[field])
				break
			}
			case 'fields': {
				bildFields(content[field])
				break
			}
			case 'buttons': {
				bildButtons(content[field])
				break
			}
			case 'references': {
				bildReferences(content[field])
				break
			}
		}

		}
		
	}

function bildTitle(name) {
	let title = document.createElement('h2');
   title.innerHTML = name;
	parse.append(title)
}

function bildFields(fields) {
	for (let field in fields) {
		let block = document.createElement('div')
		block.classList.add('item-input')
		for (let tag in fields[field]) {

			if (tag == 'input') {
				switch (fields[field][tag].type)
				{
					case 'text' :
					case 'textarea' :
					case 'number' : 
					case 'email' :
					case 'password' :{
						block.append(createInput(fields[field]))
						break
					}
					case 'color' : {
						block.append(createColor(fields[field]))
						break
					}
					case 'checkbox' : {
						block.append(createCheckbox(fields[field]))
						break
					}
					case 'file' : {
						block.append(createFile(fields[field]))
						break
					}
					case 'technology' : {
						block.append(createTechnology(fields[field]))
					}

					
				}
				
			}
		}
		parse.append(block)
	}
}

function bildButtons(buttons) {
	let block = document.createElement('div')
	block.classList.add('buttons')
	for (let button in buttons) {
		let btn = document.createElement('button')
		btn.classList.add('btn')
		btn.innerHTML = buttons[button]['text']
		block.append(btn)
	}
	parse.append(block)
}




function bildReferences(references) {
	let block = document.createElement('div')
	block.classList.add('references')
	for (let reference in references) {
		console.log(references[reference])
		if (references[reference].hasOwnProperty('input')) {
			console.log('check ref')
			block.append(createCheckboxReference(references))
			break
		} else {
			block.append(createReference(references[reference]))
		}

	}
	parse.append(block)
}

function createInput (inputObj) {

	let block = document.createElement('div')
	block.classList.add('item-input--text')

	if (inputObj.hasOwnProperty('label')) {
		let label = document.createElement('label')
		label.innerHTML = inputObj.label
		block.append(label)
	}

	let input = document.createElement('input')
	for (let attr in inputObj.input) {
		input.setAttribute(attr, inputObj.input[attr] )
		}
	block.append(input)

	return block
}

function createColor (inputObj) {

	let block = document.createElement('div')
	block.classList.add('input-color')

	if (inputObj.hasOwnProperty('label')) {
		let label = document.createElement('label')
		label.innerHTML = inputObj.label
		block.append(label)
	}

	let input = document.createElement('input')
	input.setAttribute('type', 'color')
	input.setAttribute('list', 'presetColors')
	
	let list = document.createElement('datalist')
	list.id = 'presetColors'
	for (let color in inputObj.input.colors) {
		let option = document.createElement('option')
		option.append(inputObj.input.colors[color])
		list.append(option)
	}
	input.setAttribute('value', list.firstChild.firstChild.textContent)
	block.append(input)
	block.append(list)

	

	return block
}

function createCheckbox(inputObj) {
	let block = document.createElement('div')
	block.classList.add('item-input--checkbox')

	let label = document.createElement('label')
	label.innerHTML = inputObj.label
	label.setAttribute('for', id)
	
	let input = document.createElement('input')
	input.id = id
	for (let attr in inputObj.input) {
		input.setAttribute(attr, inputObj.input[attr] )
	}
	id++
	block.append(input)
	block.append(label)
	return block
}

function createFile(inputObj) {
	let block = document.createElement('div')
	block.classList.add('file__item')

	if (inputObj.hasOwnProperty('label')) {
		let label = document.createElement('label')
		label.innerHTML = inputObj.label
		block.append(label)
	}

	let input = document.createElement('input')
	input.classList.add('file__input')

	for (let attr in inputObj.input) {
		input.setAttribute(attr, inputObj.input[attr] )
	}

	block.append(input)

	let button = document.createElement('div')
	button.classList.add('file__button')
	button.innerHTML = 'Выбрать файл'

	block.append(button)
	return block
}

function createTechnology(inputObj) {

	let block = document.createElement('div')
	block.classList.add('select')

	if (inputObj.hasOwnProperty('label')) {
		let label = document.createElement('label')
		label.innerHTML = inputObj.label
		block.append(label)
	}

	let select = document.createElement('div')
		select.classList.add('item-input--checkbox')
	
		for (let technology in inputObj.input.technologies) {

		let label = document.createElement('label')
		label.innerHTML = inputObj.input.technologies[technology]
		label.setAttribute('for', id)
		
		let option = document.createElement('input')
		option.setAttribute('type', 'checkbox')
		option.id = id
		//option.innerHTML = inputObj.input.technologies[technology]

		id++
		select.append(option)
		select.append(label)
		}

	block.append(select)

	return block
}


function createReference (inputObj) {
	let label = document.createElement('label')
	let textWithoutRef = ''
	if (inputObj['text without ref']) {
		textWithoutRef	= inputObj['text without ref'] + ' '
	} 
	let link = ''
	if (inputObj['text']) {
		link = document.createElement('a')
		link.innerHTML = inputObj['text']
		link.setAttribute('href', inputObj['ref'])
	}
	

	label.append(textWithoutRef)
	label.append(link)
	return label
}

function createCheckboxReference(inputObj) {
	let block = document.createElement('div')
	block.classList.add('item-input--checkbox')

	let label = createReference(inputObj[1])
	label.setAttribute('for', id)
	let input = document.createElement('input')
	input.id = id
	for (let attr in inputObj[0].input) {
		input.setAttribute(attr, inputObj[0].input[attr] )
	}
	id++
	block.append(input)
	block.append(label)
	return block
}



	});

