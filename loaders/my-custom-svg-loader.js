const cheerio = require('cheerio')

module.exports = function(source){
	const $ = cheerio.load(source)
	
	//$('svg')
		//.removeAttr('width')
		//.removeAttr('height')
		//.attr('fill', 'currentColor')

	//var filename = this.resourcePath.substring(this.resourcePath.lastIndexOf('/')+1);
	return $('svg').html()
}