const tracks = [
  {
    title: "Golden Hour",
    artist: "Kacey Musgraves",
    album: "Golden Hour",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/45/e8/6145e88a-6a79-fab1-ad8f-5ffdcbf44a28/18UMGIM03879.rgb.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/b0/60/13b0606a-c0b0-cb0b-1ad6-99b0ee1cfdde/mzaf_16374977868908357245.plus.aac.p.m4a",
    tag: "YOUR MIX",
  },
  {
    title: "Bloom",
    artist: "The Paper Kites",
    album: "Woodland",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0b/a9/d7/0ba9d7c7-2e68-dc9b-cde4-d142e8ce86b1/067003806756.png/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/22/ae/7d22ae06-abe0-33b2-a055-099149bc9ecd/mzaf_7018395687727242261.plus.aac.p.m4a",
    tag: "FOLK",
  },
  {
    title: "Show Me How",
    artist: "Men I Trust",
    album: "Show Me How",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cf/57/39/cf5739e6-332a-e64c-bed0-b763893c0517/artwork.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/eb/69/88eb69f2-9029-7791-b54f-55e18a05cc99/mzaf_15673037154131469534.plus.aac.p.m4a",
    tag: "DREAM POP",
  },
  {
    title: "Open Season",
    artist: "Josef Salvat",
    album: "In Your Prime - EP",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c1/9a/58/c19a5880-9faf-749a-e9e8-bdfcd58cafd9/886444810456.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/ae/22/7fae2284-9b23-763c-e5be-10db4edee293/mzaf_17099857102166508243.plus.aac.p.m4a",
    tag: "NEW FIND",
  },
  {
    title: "Slow Burn",
    artist: "Kacey Musgraves",
    album: "Golden Hour",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/45/e8/6145e88a-6a79-fab1-ad8f-5ffdcbf44a28/18UMGIM03879.rgb.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/48/8d/f0/488df0f1-a7b6-845d-6374-e9e1ea624df2/mzaf_9984810318127629642.plus.aac.p.m4a",
    tag: "FEATURED",
  },
  {
    title: "Moon Song",
    artist: "Phoebe Bridgers",
    album: "Punisher",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/39/91/4f/39914f60-e9aa-4ae9-3962-44b0a5e5d570/656605150062.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/e5/22/e3e52236-907f-32d0-5cd1-412108dd3585/mzaf_6676127279697871137.plus.aac.p.m4a",
    tag: "FAN FAVORITE",
  },
  {
    title: "Kesariya",
    artist: "Pritam, Arijit Singh & Amitabh Bhattacharya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/13/ca/9f13ca3b-e533-03e0-f19a-f0aaa774581d/196589311191.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a",
    tag: "BOLLYWOOD",
    region: "india",
  },
  {
    title: "Tum Se Hi",
    artist: "Pritam & Mohit Chauhan",
    album: "Jab We Met",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/c7/43/3dc74387-e7f4-2342-397c-4cf2037c69a5/8902894623223_cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e7/39/b8/e739b870-54a1-8f33-57d5-3817108b8bd9/mzaf_16925921654959290990.plus.aac.p.m4a",
    tag: "HINDI POP",
    region: "india",
  },
  {
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik & Arijit Singh",
    album: "Tamasha",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cb/ac/67/cbac673a-9213-7118-bb4e-2440273afb03/8902894357470_cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/a8/7d/75a87dcc-5b69-795d-7dcc-27d1c728f31f/mzaf_18055325784732588932.plus.aac.p.m4a",
    tag: "BOLLYWOOD",
    region: "india",
  },
  {
    title: "Heeriye",
    artist: "Jasleen Royal & Arijit Singh",
    album: "Heeriye - Single",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f0/8c/2a/f08c2aeb-3903-8738-d0a5-8c2e4547eed7/5054197711039.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/14/9b/ac/149bac62-12f1-2f55-a742-f38429b94c83/mzaf_17225240189976438593.plus.aac.p.m4a",
    tag: "INDIE INDIA",
    region: "india",
  },
  {
    title: "Softly",
    artist: "Karan Aujla & Ikky",
    album: "Making Memories",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/6f/01/5f6f0130-6567-22d4-bc1a-5ccb359c3fac/mzaf_5497113703334703756.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/softly/1697533643?i=1697533818",
    tag: "PUNJABI",
    region: "punjabi",
  },
  {
    title: "Winning Speech",
    artist: "Karan Aujla & MXRCI",
    album: "Winning Speech - Single",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/ae/b6/e3aeb64f-cadd-5830-c39f-6af51cd91670/mzaf_6001527501800958065.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/winning-speech/1745062649?i=1745062759",
    tag: "PUNJABI",
    region: "punjabi",
  },
  {
    title: "Admirin' You",
    artist: "Karan Aujla & Ikky",
    album: "Making Memories",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1e/93/c4/1e93c4d4-0367-c423-6faa-51af078e501b/mzaf_2676653675471599457.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/admirin-you-feat-preston-pablo/1697533643?i=1697533664",
    tag: "PUNJABI",
    region: "punjabi",
  },
  {
    title: "Talja",
    artist: "Jassa Dhillon & Gur Sidhu",
    album: "Above All",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/38/51/98/385198d5-ef16-c48b-7d79-789792fce321/cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/46/ba/8a46ba13-e99e-61ba-28b2-9a64d818329f/mzaf_12875195902894783956.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/talja-feat-deepak-dhillon/1557473931?i=1557474039",
    tag: "PUNJABI",
    region: "punjabi",
  },
  {
    title: "Pyar Bolda",
    artist: "Gur Sidhu & Jassa Dhillon",
    album: "Pyar Bolda - Single",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/20/1b/ba/201bbae5-70da-4e58-aee2-869d7ee503db/cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/8c/60/7f8c604c-6921-49db-3772-28ce70ccf272/mzaf_14591868502228954024.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/pyar-bolda/1481618151?i=1481618367",
    tag: "PUNJABI",
    region: "punjabi",
  },
  {
    title: "Love Like Me",
    artist: "Jassa Dhillon & Gur Sidhu",
    album: "Above All",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/38/51/98/385198d5-ef16-c48b-7d79-789792fce321/cover.jpg/500x500bb.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/2d/2a/cf2d2adb-7e16-8bcf-c774-d4223d67fef8/mzaf_8279678057219367865.plus.aac.p.m4a",
    storeUrl: "https://music.apple.com/in/album/love-like-me/1557473931?i=1557474045",
    tag: "PUNJABI",
    region: "punjabi",
  },
];

const playlists = [
  {
    title: "Sunday slowdown",
    description: "For taking the long way home",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=160&q=80",
    tracks: [0, 4, 1, 5],
  },
  {
    title: "Little blue hours",
    description: "Soft songs for the in-between",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=160&q=80",
    tracks: [2, 5, 9, 8],
  },
  {
    title: "Kitchen dancing",
    description: "Bare feet very much encouraged",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=160&q=80",
    tracks: [3, 10, 14, 11],
  },
];

const artistProfiles = [
  { name: "Karan Aujla", genre: "Punjabi pop", bio: "Punjabi singer-songwriter known for sharp lyrics and contemporary Punjabi pop.", trackTitle: "Softly" },
  { name: "Jassa Dhillon", genre: "Punjabi pop", bio: "Punjabi singer-songwriter whose melodic releases blend modern production with Punjabi influences.", trackTitle: "Talja" },
  { name: "Arijit Singh", genre: "Hindi playback", bio: "Indian playback singer known for expressive vocals across Hindi film music and independent releases.", trackTitle: "Kesariya" },
  { name: "Jasleen Royal", genre: "Indian indie", bio: "Indian singer-songwriter and composer whose work spans indie pop and film music.", trackTitle: "Heeriye" },
  { name: "Kacey Musgraves", genre: "Country pop", bio: "American singer-songwriter blending country roots with pop and Americana.", trackTitle: "Golden Hour" },
  { name: "Phoebe Bridgers", genre: "Indie folk", bio: "American singer-songwriter known for intimate indie-folk songwriting.", trackTitle: "Moon Song" },
  { name: "Men I Trust", genre: "Dream pop", bio: "Montreal indie band pairing understated vocals with mellow, bass-led dream pop.", trackTitle: "Show Me How" },
  { name: "The Paper Kites", genre: "Indie folk", bio: "Australian indie-folk band known for atmospheric arrangements and close harmonies.", trackTitle: "Bloom" },
];

const audio = document.querySelector("#audio-player");
const playerBar = document.querySelector(".player-bar");
const playButton = document.querySelector("#play-button");
const seekSlider = document.querySelector("#seek-slider");
const volumeSlider = document.querySelector("#volume-slider");
const currentTimeLabel = document.querySelector("#current-time");
const durationLabel = document.querySelector("#duration-time");
const toast = document.querySelector("#toast");
const waveform = document.querySelector("#waveform");
const detailDialog = document.querySelector("#detail-dialog");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("#search-input");
let currentTrackIndex = -1;
let shuffled = false;
let repeating = false;
let usingDemoFallback = false;
let playRequestId = 0;
let toastTimeout;

for (let index = 0; index < 56; index += 1) {
  const bar = document.createElement("span");
  const height = 3 + ((index * 17 + index * index * 3) % 12);
  bar.style.height = `${height}px`;
  waveform.append(bar);
}

function renderAlbums(collection, gridSelector) {
  const grid = document.querySelector(gridSelector);
  grid.replaceChildren();

  const albums = new Map();
  collection.forEach((track) => {
    const key = track.album.trim().toLocaleLowerCase();
    if (!albums.has(key)) albums.set(key, []);
    const albumTracks = albums.get(key);
    const duplicate = albumTracks.some((existing) =>
      existing.title.trim().toLocaleLowerCase() === track.title.trim().toLocaleLowerCase()
      && existing.artist.trim().toLocaleLowerCase() === track.artist.trim().toLocaleLowerCase()
    );
    if (!duplicate) albumTracks.push(track);
  });

  albums.forEach((albumTracks) => {
    const track = albumTracks[0];
    const trackIndex = tracks.indexOf(track);
    const creditedArtists = new Map();
    albumTracks.forEach((item) => {
      const artistKey = item.artist.toLocaleLowerCase().split(/\s*[&,]\s*/).sort().join("|");
      if (!creditedArtists.has(artistKey)) creditedArtists.set(artistKey, item.artist);
    });
    const card = document.createElement("article");
    card.className = "album-card";
    card.tabIndex = 0;
    card.dataset.trackIndex = String(trackIndex);
    card.setAttribute("aria-label", `Play ${track.album} by ${track.artist}`);
    card.dataset.searchable = albumTracks.map((item) => `${item.title} ${item.artist} ${item.album}`).join(" ").toLowerCase();
    const storeUrl = track.storeUrl || `https://music.apple.com/search?term=${encodeURIComponent(`${track.title} ${track.artist}`)}`;
    const songButtons = albumTracks.length > 0
      ? `<div class="album-track-list" aria-label="Songs on ${track.album}">${albumTracks.map((item) => {
        const index = tracks.indexOf(item);
        const itemStoreUrl = item.storeUrl || `https://music.apple.com/search?term=${encodeURIComponent(`${item.title} ${item.artist}`)}`;
        return `<div class="album-track-row"><button class="album-track-button" type="button" data-track-index="${index}" aria-label="Play ${item.title}"><span>${item.title}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7V5Z" /></svg></button><a class="track-store-link" href="${itemStoreUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open full song ${item.title} in Apple Music">↗</a></div>`;
      }).join("")}</div>`
      : "";
    card.innerHTML = `
      <div class="album-art-wrap">
        <img class="album-art" src="${track.cover}" alt="${track.album} album artwork" loading="lazy" />
        <span class="album-tag">${track.tag}</span>
        <button class="card-play" type="button" aria-label="Play ${track.title}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7V5Z" /></svg>
        </button>
      </div>
      <p class="album-title">${track.album}</p>
      <p class="album-meta">${[...creditedArtists.values()].join(" · ")} <span>·</span><a class="store-link" href="${storeUrl}" target="_blank" rel="noopener noreferrer">Full song ↗</a></p>
      ${songButtons}
    `;
    card.addEventListener("click", (event) => {
      if (event.target.closest(".store-link, .track-store-link")) return;
      const songButton = event.target.closest(".album-track-button");
      if (songButton || event.target.closest(".card-play")) {
        playTrack(songButton ? Number(songButton.dataset.trackIndex) : trackIndex);
        return;
      }
      showDetails({
        kind: "ALBUM",
        title: track.album,
        description: `${[...creditedArtists.values()].join(" · ")} · ${albumTracks.length} ${albumTracks.length === 1 ? "song" : "songs"}`,
        cover: track.cover,
        tracks: albumTracks,
      });
    });
    card.addEventListener("keydown", (event) => {
      if (event.target === card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        showDetails({
          kind: "ALBUM",
          title: track.album,
          description: `${[...creditedArtists.values()].join(" · ")} · ${albumTracks.length} ${albumTracks.length === 1 ? "song" : "songs"}`,
          cover: track.cover,
          tracks: albumTracks,
        });
      }
    });
    card.querySelectorAll(".album-track-button").forEach((button) => {
      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          playTrack(Number(button.dataset.trackIndex));
        }
      });
    });
    grid.append(card);
  });
}

function renderArtists(matchingTracks = tracks) {
  const grid = document.querySelector("#artist-grid");
  grid.replaceChildren();
  artistProfiles
    .map((profile) => ({
      ...profile,
      trackIndex: tracks.findIndex((track) => track.title === profile.trackTitle),
      songs: tracks.filter((item) => item.artist.toLocaleLowerCase().includes(profile.name.toLocaleLowerCase())),
    }))
    .filter((profile) => profile.trackIndex >= 0 && profile.songs.some((item) => matchingTracks.includes(item)))
    .forEach((profile) => {
      const track = tracks[profile.trackIndex];
      const card = document.createElement("article");
      card.className = "artist-card";
      card.innerHTML = `
        <button class="artist-card-info" type="button" aria-label="View ${profile.name} artist details">
          <img src="${track.cover}" alt="" loading="lazy" />
          <span class="artist-card-copy"><strong>${profile.name}</strong><small>${profile.genre}</small></span>
        </button>
        <button class="artist-card-play" type="button" aria-label="Play ${profile.name}" ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7V5Z" /></svg></button>
      `;
      card.querySelector(".artist-card-info").addEventListener("click", () => {
        showDetails({
          kind: `${profile.genre.toLocaleUpperCase()} ARTIST`,
          title: profile.name,
          description: `${profile.bio} ${profile.genre} · ${profile.songs.length} ${profile.songs.length === 1 ? "song" : "songs"} in your VYBE collection`,
          cover: track.cover,
          tracks: profile.songs,
        });
      });
      card.querySelector(".artist-card-play").addEventListener("click", () => playTrack(profile.trackIndex));
      grid.append(card);
    });
}

function renderPlaylists() {
  const grid = document.querySelector("#playlist-grid");
  playlists.forEach((playlist) => {
    const card = document.createElement("article");
    card.className = "playlist-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="playlist-cover"><img src="${playlist.image}" alt="" loading="lazy" /></div>
      <div class="playlist-copy"><strong>${playlist.title}</strong><span>${playlist.description}</span></div>
      <button class="playlist-play" type="button" aria-label="Play ${playlist.title}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7V5Z" /></svg>
      </button>
    `;
    const playlistTracks = playlist.tracks.map((index) => tracks[index]).filter(Boolean);
    card.addEventListener("click", (event) => {
      if (event.target.closest(".playlist-play")) {
        playTrack(playlistTracks[0] ? tracks.indexOf(playlistTracks[0]) : -1);
        return;
      }
      showDetails({
        kind: "CURATED PLAYLIST",
        title: playlist.title,
        description: `${playlist.description} · ${playlistTracks.length} songs`,
        cover: playlist.image,
        tracks: playlistTracks,
      });
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDetails({
          kind: "CURATED PLAYLIST",
          title: playlist.title,
          description: `${playlist.description} · ${playlistTracks.length} songs`,
          cover: playlist.image,
          tracks: playlistTracks,
        });
      }
    });
    grid.append(card);
  });
}

function showDetails({ kind, title, description, cover, tracks: items }) {
  document.querySelector("#detail-kicker").textContent = kind;
  document.querySelector("#detail-title").textContent = title;
  document.querySelector("#detail-description").textContent = description;
  const coverImage = document.querySelector("#detail-cover");
  coverImage.src = cover;
  coverImage.alt = `${title} artwork`;

  const list = document.querySelector("#detail-track-list");
  list.replaceChildren();
  items.forEach((track) => {
    const index = tracks.indexOf(track);
    const row = document.createElement("div");
    row.className = "detail-track";
    const copy = document.createElement("div");
    copy.className = "detail-track-copy";
    const songName = document.createElement("strong");
    songName.textContent = track.title;
    const artistName = document.createElement("span");
    artistName.textContent = track.artist;
    copy.append(songName, artistName);

    const actions = document.createElement("div");
    actions.className = "detail-track-actions";
    const fullSong = document.createElement("a");
    fullSong.className = "detail-full-song";
    fullSong.href = track.storeUrl || `https://music.apple.com/search?term=${encodeURIComponent(`${track.title} ${track.artist}`)}`;
    fullSong.target = "_blank";
    fullSong.rel = "noopener noreferrer";
    fullSong.textContent = "Full song ↗";
    fullSong.setAttribute("aria-label", `Open ${track.title} by ${track.artist} on Apple Music`);
    const play = document.createElement("button");
    play.className = "detail-play";
    play.type = "button";
    play.setAttribute("aria-label", `Play ${track.title}`);
    play.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7V5Z" /></svg>';
    play.addEventListener("click", () => playTrack(index));
    actions.append(fullSong, play);
    row.append(copy, actions);
    list.append(row);
  });

  if (!detailDialog.open) detailDialog.showModal();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function setSliderProgress(slider, fraction) {
  slider.style.setProperty("--progress", `${Math.max(0, Math.min(1, fraction)) * 100}%`);
}

function updateWaveform(fraction) {
  const playedBars = Math.floor(Math.max(0, Math.min(1, fraction)) * waveform.children.length);
  Array.from(waveform.children).forEach((bar, index) => {
    bar.classList.toggle("played", index < playedBars);
  });
}

function updatePlayState() {
  playerBar.classList.toggle("is-playing", !audio.paused);
  playButton.setAttribute("aria-label", audio.paused ? "Play" : "Pause");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2300);
}

async function playTrack(index) {
  if (!Number.isInteger(index) || index < 0 || index >= tracks.length) return;
  const requestId = ++playRequestId;
  const track = tracks[index];
  if (currentTrackIndex !== index) {
    currentTrackIndex = index;
    usingDemoFallback = false;
    audio.src = track.audio;
    document.querySelector("#player-cover").src = track.cover;
    document.querySelector("#player-title").textContent = track.title;
    document.querySelector("#player-artist").textContent = track.artist;
    document.querySelector("#like-button").setAttribute("aria-pressed", "false");
    currentTimeLabel.textContent = "0:00";
    durationLabel.textContent = "0:00";
    seekSlider.value = "0";
    setSliderProgress(seekSlider, 0);
    updateWaveform(0);
  }

  try {
    await audio.play();
  } catch (error) {
    if (requestId !== playRequestId) return;
    if (error.name === "NotSupportedError" && !usingDemoFallback) {
      usingDemoFallback = true;
      const demoNumber = String(index + 1).padStart(2, "0");
      audio.src = window.location.protocol === "file:"
        ? `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(index % 6) + 1}.mp3`
        : `audio/demo-${demoNumber}.mp3`;
      try {
        await audio.play();
        if (requestId !== playRequestId) return;
        showToast("This browser can't decode the catalog preview; playing a demo instrumental.");
        return;
      } catch (fallbackError) {
        if (requestId !== playRequestId || fallbackError.name === "AbortError") return;
        console.error("Demo audio fallback failed:", fallbackError);
      }
    }
    if (requestId !== playRequestId) return;
    updatePlayState();
    showToast("Couldn't start this track. Check your connection and try again.");
    console.error("Audio playback failed:", error);
  }
}

function moveTrack(direction) {
  if (currentTrackIndex < 0) {
    playTrack(0);
    return;
  }
  if (shuffled && direction > 0 && tracks.length > 1) {
    let nextIndex = currentTrackIndex;
    while (nextIndex === currentTrackIndex) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    }
    playTrack(nextIndex);
    return;
  }
  const nextIndex = (currentTrackIndex + direction + tracks.length) % tracks.length;
  playTrack(nextIndex);
}

renderAlbums(tracks.filter((track) => !track.region), "#albums-grid");
renderAlbums(tracks.filter((track) => track.region === "india"), "#indian-grid");
renderAlbums(tracks.filter((track) => track.region === "punjabi"), "#punjabi-grid");
renderArtists();
renderPlaylists();
audio.volume = Number(volumeSlider.value);
setSliderProgress(volumeSlider, audio.volume);

document.querySelectorAll("[data-play-track]").forEach((button) => {
  button.addEventListener("click", () => playTrack(Number(button.dataset.playTrack)));
});
document.querySelector(".detail-close").addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", (event) => {
  if (event.target === detailDialog) detailDialog.close();
});
playButton.addEventListener("click", () => {
  if (currentTrackIndex < 0) {
    playTrack(0);
  } else if (audio.paused) {
    playTrack(currentTrackIndex);
  } else {
    audio.pause();
  }
});
document.querySelector("#previous-button").addEventListener("click", () => {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    moveTrack(-1);
  }
});
document.querySelector("#next-button").addEventListener("click", () => moveTrack(1));
document.querySelector("#shuffle-button").addEventListener("click", (event) => {
  shuffled = !shuffled;
  event.currentTarget.setAttribute("aria-pressed", String(shuffled));
  showToast(shuffled ? "Shuffle is on" : "Shuffle is off");
});
document.querySelector("#repeat-button").addEventListener("click", (event) => {
  repeating = !repeating;
  audio.loop = repeating;
  event.currentTarget.setAttribute("aria-pressed", String(repeating));
  showToast(repeating ? "Repeat is on" : "Repeat is off");
});
document.querySelector("#like-button").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const liked = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(liked));
  showToast(liked ? "Added to your liked songs" : "Removed from your liked songs");
});
document.querySelector(".queue-button").addEventListener("click", () => {
  showToast(currentTrackIndex < 0 ? "Play a song to start your queue" : `Up next: ${tracks[(currentTrackIndex + 1) % tracks.length].title}`);
});
document.querySelector(".add-playlist").addEventListener("click", () => showToast("Playlist creation is coming soon"));
document.querySelector(".profile-button").addEventListener("click", () => showToast("You're listening as Alex Morgan"));
document.querySelector(".expand-button").addEventListener("click", (event) => {
  const expanded = playerBar.classList.toggle("player-expanded");
  event.currentTarget.setAttribute("aria-expanded", String(expanded));
  event.currentTarget.setAttribute("aria-label", expanded ? "Hide player details" : "Show player details");
});
document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.scroll}`).scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
searchBox.addEventListener("click", (event) => {
  if (window.matchMedia("(max-width: 590px)").matches && !searchBox.classList.contains("search-open")) {
    event.preventDefault();
    searchBox.classList.add("search-open");
    searchInput.focus();
  }
});
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filteredTracks = tracks.filter((track) => `${track.title} ${track.artist} ${track.album}`.toLowerCase().includes(query));
  const westernTracks = filteredTracks.filter((track) => !track.region);
  const indianTracks = filteredTracks.filter((track) => track.region === "india");
  const punjabiTracks = filteredTracks.filter((track) => track.region === "punjabi");
  renderAlbums(westernTracks, "#albums-grid");
  renderAlbums(indianTracks, "#indian-grid");
  renderAlbums(punjabiTracks, "#punjabi-grid");
  renderArtists(filteredTracks);
  document.querySelector("#albums").hidden = !westernTracks.length;
  document.querySelector("#indian-picks").hidden = !indianTracks.length;
  document.querySelector("#punjabi-picks").hidden = !punjabiTracks.length;
  document.querySelector("#artist-discovery").hidden = !filteredTracks.length;
  document.querySelector("#playlists").hidden = Boolean(query);
  document.querySelector("#artists").hidden = Boolean(query);
  document.querySelector("#search-empty").hidden = filteredTracks.length > 0 || !query;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchBox.classList.add("search-open");
    searchInput.focus();
  }
  if (event.key === "Escape" && searchBox.classList.contains("search-open")) {
    searchBox.classList.remove("search-open");
    searchInput.blur();
  }
  if (event.code === "Space" && !["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    playButton.click();
  }
});

audio.addEventListener("loadedmetadata", () => {
  durationLabel.textContent = formatTime(audio.duration);
  seekSlider.max = String(audio.duration);
  updateWaveform(0);
});
audio.addEventListener("timeupdate", () => {
  currentTimeLabel.textContent = formatTime(audio.currentTime);
  seekSlider.value = String(audio.currentTime);
  setSliderProgress(seekSlider, audio.duration ? audio.currentTime / audio.duration : 0);
  updateWaveform(audio.duration ? audio.currentTime / audio.duration : 0);
});
audio.addEventListener("ended", () => {
  if (!repeating) moveTrack(1);
});
audio.addEventListener("play", updatePlayState);
audio.addEventListener("pause", updatePlayState);
audio.addEventListener("error", () => {
  updatePlayState();
  if (currentTrackIndex >= 0 && !usingDemoFallback) showToast("This track couldn't be loaded. Try another one.");
});
seekSlider.addEventListener("input", () => {
  if (!Number.isFinite(audio.duration)) return;
  audio.currentTime = Number(seekSlider.value);
  setSliderProgress(seekSlider, audio.currentTime / audio.duration);
});
volumeSlider.addEventListener("input", () => {
  audio.volume = Number(volumeSlider.value);
  setSliderProgress(volumeSlider, audio.volume);
});
