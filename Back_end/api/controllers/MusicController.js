/**
 * MusicController
 *
 * @description :: Server-side logic for managing musics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	playlists: (req, res) => {
		var userEmail = req.param('email')
		music.findOneByEmail(userEmail).exec(
			(err, playlists) => {
				// Setup error page in angular
				if (err) return err
				res.json(playlists)
			}
		)
	}
};
