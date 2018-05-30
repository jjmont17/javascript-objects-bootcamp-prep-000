var playlist = { 'artist name' : 'song name'};

function updatePlaylist(playlist, artistName, songName)
{
  playlist[artistName] = songName
  return playlist;
}

function removeFromPlaylist( playlist, artistName)
{
  delete playlist[artistName]
  return playlist;
}
