const gulp       = require( "gulp" );
const sass       = require( "gulp-sass" );
const rename     = require( "gulp-rename" );

const plumber = require( "gulp-plumber" );
const del     = require( "del" );

gulp.task( "default", function ()
{
	del( [ "dist/*.css" ] );
	gulp.src( "dist/*.scss" ).pipe( plumber( function ( err )
	{
		console.log( err );
		this.emit( "end" );
	} ) ).pipe( sass( {
		outputStyle: "compressed"
	} ) ).pipe( rename( function ( path )
	{
		path.extname = ".min.css";
	} ) ).pipe( gulp.dest( "dist/" ) );

	return gulp.src( "dist/*.scss" ).pipe( plumber( function ( err )
	{
		console.log( err );
		this.emit( "end" );
	} ) ).pipe( sass( {
		outputStyle: "expanded"
	} ) ).pipe( gulp.dest( "dist/" ) );

} );
