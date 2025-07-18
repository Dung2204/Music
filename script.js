$(function()
{
    var playerTrack = $("#player-track");
    var bgArtwork = $('#bg-artwork');
    var bgArtworkUrl;
    var albumName = $('#album-name');
    var trackName = $('#track-name');
    var albumArt = $('#album-art'),
        sArea = $('#s-area'),
        seekBar = $('#seek-bar'),
        trackTime = $('#track-time'),
        insTime = $('#ins-time'),
        sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find('i'),
        tProgress = $('#current-time'),
        tTime = $('#track-length'),
        seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
        buffInterval = null, tFlag = false;
    
    var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
    
    var songs = [{
        artist: "Sleepy",
        name: "3 (Britney Spears)",
        url: "Musics/3.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "NIKI",
        name: "Lowkey",
        url: "Musics/Lowkey.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Little Mix",
        name: "Salute",
        url: "Musics/Salute.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Britney Spears ft. Sabi",
        name: "Beautiful",
        url: "Musics/Beautiful.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Tape Machines",
        name: "3D Print",
        url: "Musics/3D Print.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Zedd & Katy Pery",
        name: "365",
        url: "Musics/365.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "A Little Bit Crazy",
        url: "Musics/A Little Bit Crazy.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Karmin",
        name: "Acapella",
        url: "Musics/Acapella.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "All About Him",
        url: "Musics/All About Him.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Madison Beer",
        name: "Baby",
        url: "Musics/Baby.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Mia Martina",
        name: "Beast",
        url: "Musics/Beast.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Ariana Grande",
        name: "Bloodline",
        url: "Musics/Bloodline.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Eurielle",
        name: "City of The Dead",
        url: "Musics/City of The Dead.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Ke$ha",
        name: "C'mon",
        url: "Musics/C'mon.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Frank Fitzpatrick",
        name: "Come On Now",
        url: "Musics/Come On Now.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Margaret",
        name: "Cool Me Down",
        url: "Musics/Cool Me Down.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sabby Sousa",
        name: "Cream n' Frosting",
        url: "Musics/Cream n' Frosting.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Britney Spears",
        name: "Criminal",
        url: "Musics/Criminal.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "Dance (The Way It Moves)",
        url: "Musics/Dance (The Way It Moves).mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sugar Blizz",
        name: "Dear Friend",
        url: "Musics/Dear Friend.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Ameryh",
        name: "Deep End",
        url: "Musics/Deep End.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "FRIENDS",
        url: "Musics/FRIENDS.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Jax Jones & Bebe Rexha",
        name: "Harder",
        url: "Musics/Harder.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Ellie Goulding & Juice WRLD",
        name: "Hate Me",
        url: "Musics/Hate Me.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "Heist",
        url: "Musics/Heist.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "MOUNTAINS & MACHINES",
        name: "Hero",
        url: "Musics/Hero.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "Hey Mama",
        url: "Musics/Hey Mama.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Sleepy",
        name: "Hollow Mind",
        url: "Musics/Hollow Mind.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "Alan Walker & K-391",
        name: "Ignite",
        url: "Musics/Ignite.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    },{
        artist: "HUGEL",
        name: "WTF",
        url: "Musics/WTF.mp3",
        picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
    }];

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    function showHover(event)
    {
        seekBarPos = sArea.offset(); 
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());
        
        sHover.width(seekT);
        
        cM = seekLoc / 60;
        
        ctMinutes = Math.floor(cM);
        ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
        
        if( (ctMinutes < 0) || (ctSeconds < 0) )
            return;
        
        if( (ctMinutes < 0) || (ctSeconds < 0) )
            return;
        
        if(ctMinutes < 10)
            ctMinutes = '0'+ctMinutes;
        if(ctSeconds < 10)
            ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
            insTime.text(ctMinutes+':'+ctSeconds);
            
        insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
    }

    function hideHover()
    {
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);       
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    }

    function updateCurrTime()
    {
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
        
        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);
        
        playProgress = (audio.currentTime / audio.duration) * 100;
        
        if(curMinutes < 10)
            curMinutes = '0'+curMinutes;
        if(curSeconds < 10)
            curSeconds = '0'+curSeconds;
        
        if(durMinutes < 10)
            durMinutes = '0'+durMinutes;
        if(durSeconds < 10)
            durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
            tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
            tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');
        
        seekBar.width(playProgress+'%');
        
        if( playProgress == 100 )
        {
            i.attr('class','fa fa-play');
            seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
            selectTrack(1);
        }
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
            
            currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            
            // Update playlist active song
            $('#playlist li').removeClass('active');
            $('#playlist li').eq(currIndex).addClass('active');
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
    {   
        audio = new Audio();

        // Populate playlist
        var playlist = $('#playlist');
        songs.forEach(function(song, index) {
            var li = $('<li>').appendTo(playlist);
            li.append($('<span>').addClass('song-index').text(index + 1));
            var info = $('<div>').addClass('song-info').appendTo(li);
            info.append($('<div>').addClass('song-name').text(song.name));
            info.append($('<div>').addClass('song-artist').text(song.artist));
            li.on('click', function() {
                currIndex = index - 1; // Adjust for selectTrack increment
                selectTrack(1);
            });
        });

        selectTrack(0);
        
        audio.loop = false;
        
        playPauseButton.on('click',playPause);
        
        sArea.mousemove(function(event){ showHover(event); });
        
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
        
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
    }
    
    initPlayer();
});