var Type = {};
for ( var i = 0; type = ['String', 'Array', 'Number'][i++];) {
	(function(type) {
		Type['is' + type] = function( obj ) {
			return Object.prototype.toString.call(obj) === '[object ' + type + ']';
		}
	})(type)
}
module.exports = Type;