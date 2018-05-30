var playlist = { 'artist' : 'songs'};

function updatePlaylist(playlist, artistName, songName)
{
  playlist[artustName] = songName
  return playlist;
}

function removeFromPlaylist( playlist, artistName)
{
  delete playlist[artistName]
  return playlist;
}
