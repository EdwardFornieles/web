AFRAME.registerComponent('heinekenframe', {
	schema: {
		name: {
			type: 'string'
		},
		rotated: {
			type: 'bool'
		},
		metadata: {
			type: 'string'
		},
	},
	init: function() {		
		const homeThumbnail = document.getElementById('homeThumbnail')

		homeThumbnail.addEventListener('click', () => {
			window.location.href = 'https://buudigital.com.br';
		})
	}
    
})