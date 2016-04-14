function searchIt() {
	var search = document.getElementById('searchCriteria').value,
		token  = "955862462.1677ed0.cce1d941bd4047709ca884b570d113ba";
	document.getElementById('results').innerHTML = ""
	$.ajax({
		url: "https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=" + token,
		// url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token,
		dataType: "jsonp",
		success: function(stuff) {
			console.log(stuff)
			for(i = 0; i < 15; i++) {
				var div = document.createElement('div'),
					h2 = document.createElement('h2'),
					p = document.createElement('p'),
					a = document.createElement('a'),
					img = document.createElement('img'),
					h2Text = document.createTextNode(stuff.data[i].caption.from.username),
					pText = document.createTextNode('Check out the ');
					aText = document.createTextNode('comments.')

				h2.appendChild(h2Text);
				a.appendChild(aText);
				a.setAttribute('href', stuff.data[i].link);
				a.setAttribute('target', '_blank');
				p.appendChild(pText);
				p.appendChild(a);
				img.src = stuff.data[i].images.standard_resolution.url
				img.setAttribute('class', 'img-responsive')

				div.appendChild(h2)
				div.appendChild(img)
				div.appendChild(p)
				div.setAttribute('class', 'col-md-4 col-sm-4');

				document.getElementById('results').appendChild(div);
				console.log(stuff.data[i].caption.from.full_name)
				console.log(stuff.data[i].caption.text)
			}
		},
		type: 'GET'
	})
}

document.getElementById('button1').onclick = searchIt;

function myStuff() {
	var token  = "955862462.1677ed0.cce1d941bd4047709ca884b570d113ba";
	document.getElementById('resultMe').innerHTML = ""
	$.ajax({
		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token,
		dataType: "jsonp",
		success: function(stuff) {
			console.log(stuff);
			for(i = 0; i < 3; i++) {
				var a = document.createElement('a'),
					img = document.createElement('img'),
					p = document.createElement('p'),
					span = document.createElement('span'),
					pText = document.createTextNode('I got ' + stuff.data[i].likes.count + " "),
					pText2 = document.createTextNode(" 's"),
					aText = document.createTextNode('Commentarios'),
					divMe = document.getElementById('resultMe');

				img.src = stuff.data[i].images.standard_resolution.url;
				img.setAttribute('class', 'img-responsive myImages');
				a.href = stuff.data[i].link;
				a.setAttribute('target', '_blank');
				a.appendChild(aText);
				span.setAttribute('class', 'glyphicon glyphicon-thumbs-up');
				p.appendChild(pText);
				p.appendChild(span);
				p.appendChild(pText2);

				divMe.appendChild(p);
				divMe.appendChild(img);
				divMe.appendChild(a);
				p.setAttribute('class', 'divvies')

			}
		},
		type: 'GET'
	})
}

document.getElementById('button2').onclick = myStuff;