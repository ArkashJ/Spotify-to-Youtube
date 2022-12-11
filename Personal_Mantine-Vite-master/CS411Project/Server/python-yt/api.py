from crypt import methods
from flask import Flask, jsonify, request
from flask_cors import CORS

from ytmusicapi import YTMusic


app = Flask(__name__)
CORS(
	app,
	origins=['http://127.0.0.1:5173', 'http://localhost:5173'],
	supports_credentials=True,
)



@app.route('/api/playlist', methods=['POST'])
def playlist():
    print(f'CALL RECEIVED')
    ytmusic = YTMusic('headers_auth.json')
    # songs = ['holiday', 'fellas in paris', 'dont look down']
    songs = request.json['songs']
    # print(f'Authenticated')
    playlistId = ytmusic.create_playlist(title="test", description="test description", privacy_status="PRIVATE")
    for song in songs:
        search = ytmusic.search(song, filter='songs')
        ytmusic.add_playlist_items(playlistId, [search[0]['videoId']])
    return jsonify({'success': True})
    
	
@app.route('/api/search')
def search():
	ytmusic = YTMusic('headers_auth.json')
	playlists = ytmusic.get_library_playlists()
	print(f'got playlists: {playlists}')
	return jsonify(playlists)

if __name__ == '__main__':
	app.run(debug=True, host='localhost', port=5001)
