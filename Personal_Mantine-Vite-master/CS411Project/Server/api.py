from flask import Flask, jsonify, request

from ytmusicapi import YTMusic


app = Flask(__name__)



@app.route('/api/playlist')
def playlist():
	
	ytmusic = YTMusic('headers_auth.json')
	songs = ['song1', 'song2', 'song3', 'song4', 'song5']

	# print(f'Authenticated')
	playlistId = ytmusic.create_playlist(title="test", description="test description", privacy_status="PRIVATE")
	# print(f'created playlist')
	for song in songs:
		search = ytmusic.search(song, filter='songs')
		# print(f'searching for {song}')
		ytmusic.add_playlist_items(playlistId, search[0])
		# print(f'added {song} to playlist')
	return jsonify({'success': True})


	
@app.route('/api/search')
def search():
	ytmusic = YTMusic('headers_auth.json')
	playlists = ytmusic.get_library_playlists()
	print(f'got playlists: {playlists}')
	return jsonify(playlists)

if __name__ == '__main__':
	app.run(debug=True, host='localhost', port=5001)
