// PLAYER RADIO

const audio = document.getElementById("jp_audio_0");
        let isPlaying = false;
        let distillerieSonoreIconSrc = "./Ressources/Images/LOGO-LIVE-1.png"

        let currentMusic = {
            track: "",
            title: "Tape House",
            artist: "TAPE HOUSE",
            picture: distillerieSonoreIconSrc,
        };
        const streamUrl = "https://manager5.streamradio.fr:1295/stream";
        //   props: track, title, artist, picture
        const apiUrl =
            "https://api.moncmsradio.fr/manager.php?url=https://manager5.streamradio.fr:1280&server=1";

        const module = {};
        module.getCurrentMusic = (callback) => {
            $.ajax({
                url: apiUrl,
                method: "get",
            }).done(callback);
        };
        module.updateUI = () => {
            document.getElementById("titre").innerText = currentMusic.title;
            document.getElementById("artist").innerText = currentMusic.artist;
            document.getElementById("titre1").innerText = currentMusic.title;
            document.getElementById("artist1").innerText = currentMusic.artist;
            document.getElementById("titre2").innerText = currentMusic.title;
            document.getElementById("artist2").innerText = currentMusic.artist;
            document.getElementById("titre3").innerText = currentMusic.title;
            document.getElementById("artist3").innerText = currentMusic.artist;
            document.getElementById("titre4").innerText = currentMusic.title;
            document.getElementById("artist4").innerText = currentMusic.artist;
            document.getElementById("titre5").innerText = currentMusic.title;
            document.getElementById("artist5").innerText = currentMusic.artist;
            document.getElementById("titre6").innerText = currentMusic.title;
            document.getElementById("artist6").innerText = currentMusic.artist;
            document.getElementById("titre7").innerText = currentMusic.title;
            document.getElementById("artist7").innerText = currentMusic.artist;
            document.getElementById("titre8").innerText = currentMusic.title;
            document.getElementById("artist8").innerText = currentMusic.artist;
            document.getElementById("titre9").innerText = currentMusic.title;
            document.getElementById("artist9").innerText = currentMusic.artist;
            document.getElementById("titre10").innerText = currentMusic.title;
            document.getElementById("artist10").innerText = currentMusic.artist;
            document.getElementById("titre11").innerText = currentMusic.title;
            document.getElementById("artist11").innerText = currentMusic.artist;
            document.getElementById("titre12").innerText = currentMusic.title;
            document.getElementById("artist12").innerText = currentMusic.artist;
            document.getElementById("titre13").innerText = currentMusic.title;
            document.getElementById("artist13").innerText = currentMusic.artist;
            document.getElementById("titre14").innerText = currentMusic.title;
            document.getElementById("artist14").innerText = currentMusic.artist;
            document.getElementById("titre15").innerText = currentMusic.title;
            document.getElementById("artist15").innerText = currentMusic.artist;
            document.getElementById("titre16").innerText = currentMusic.title;
            document.getElementById("artist16").innerText = currentMusic.artist;
            document.getElementById("titre17").innerText = currentMusic.title;
            document.getElementById("artist17").innerText = currentMusic.artist;
            document.getElementById("titre18").innerText = currentMusic.title;
            document.getElementById("artist18").innerText = currentMusic.artist;
            document.getElementById("titre19").innerText = currentMusic.title;
            document.getElementById("artist19").innerText = currentMusic.artist;
            document.getElementById("titre20").innerText = currentMusic.title;
            document.getElementById("artist20").innerText = currentMusic.artist;
            document.getElementById("titre21").innerText = currentMusic.title;
            document.getElementById("artist21").innerText = currentMusic.artist;
            document.getElementById("titre22").innerText = currentMusic.title;
            document.getElementById("artist22").innerText = currentMusic.artist;
            document.getElementById("titre23").innerText = currentMusic.title;
            document.getElementById("artist23").innerText = currentMusic.artist;
            document.getElementById("titre24").innerText = currentMusic.title;
            document.getElementById("artist24").innerText = currentMusic.artist;
            document.getElementById("titre25").innerText = currentMusic.title;
            document.getElementById("artist25").innerText = currentMusic.artist;
            document.getElementById("titre26").innerText = currentMusic.title;
            document.getElementById("artist27").innerText = currentMusic.artist;
            document.getElementById("titre28").innerText = currentMusic.title;
            document.getElementById("artist28").innerText = currentMusic.artist;
            document.getElementById("titre29").innerText = currentMusic.title;
            document.getElementById("artist29").innerText = currentMusic.artist;
            document.getElementById("titre30").innerText = currentMusic.title;
            document.getElementById("artist30").innerText = currentMusic.artist;
            document.getElementById("titre31").innerText = currentMusic.title;
            document.getElementById("artist31").innerText = currentMusic.artist;
            document.getElementById("titre32").innerText = currentMusic.title;
            document.getElementById("artist32").innerText = currentMusic.artist;
            document.getElementById("titre33").innerText = currentMusic.title;
            document.getElementById("artist33").innerText = currentMusic.artist;
            document.getElementById("titre34").innerText = currentMusic.title;
            document.getElementById("artist34").innerText = currentMusic.artist;
            document.getElementById("titre35").innerText = currentMusic.title;
            document.getElementById("artist35").innerText = currentMusic.artist;
            document.getElementById("titre36").innerText = currentMusic.title;
            document.getElementById("artist36").innerText = currentMusic.artist;
            document.getElementById("titre37").innerText = currentMusic.title;
            document.getElementById("artist37").innerText = currentMusic.artist;
            document.getElementById("titre38").innerText = currentMusic.title;
            document.getElementById("artist38").innerText = currentMusic.artist;
            document.getElementById("titre39").innerText = currentMusic.title;
            document.getElementById("artist39").innerText = currentMusic.artist;
            document.getElementById("titre40").innerText = currentMusic.title;
            document.getElementById("artist40").innerText = currentMusic.artist;
            document.getElementById("titre41").innerText = currentMusic.title;
            document.getElementById("artist41").innerText = currentMusic.artist;
            document.getElementById("titre42").innerText = currentMusic.title;
            document.getElementById("artist42").innerText = currentMusic.artist;
            document.getElementById("titre43").innerText = currentMusic.title;
            document.getElementById("artist43").innerText = currentMusic.artist;
            document.getElementById("titre44").innerText = currentMusic.title;
            document.getElementById("artist44").innerText = currentMusic.artist;
            document.getElementById("titre45").innerText = currentMusic.title;
            document.getElementById("artist45").innerText = currentMusic.artist;
            document.getElementById("titre46").innerText = currentMusic.title;
            document.getElementById("artist46").innerText = currentMusic.artist;
            document.getElementById("titre47").innerText = currentMusic.title;
            document.getElementById("artist47").innerText = currentMusic.artist;
            document
                .getElementById("cover")
                .setAttribute("src", currentMusic.picture);
        };
        module.setIsPlaying = (state) => {
            $("#btnPlay").css("display", "none");
            $("#btnPause").css("display", "none");
            // $("#loading").css("display", "none");
            if (state == "playing") {
                $("#btnPlay").css("display", "none");
                $("#btnPause").css("display", "block");
                // $("#loading").css("display", "none");
                return;
            } else if (state == "abort") {
                $("#btnPlay").css("display", "block");
                $("#btnPause").css("display", "none");
                // $("#loading").css("display", "none");

            } else if (state == "waiting") {
                $("#btnPlay").css("display", "none");
                $("#btnPause").css("display", "block");
                // $("#loading").css("display", "none");

            } else {}
        };




        setInterval(() => {
            module.getCurrentMusic((data) => {
                currentMusic = data;
                if (data.picture == null) {
                    currentMusic.picture = distillerieSonoreIconSrc; 
                }
            });
            module.updateUI();
  
        }, 4000);

        module.play = () => {

            audio.src = streamUrl;
            audio.play();
            module.setIsPlaying("playing");
            module.updateUI();
        }


        module.pause = () => {

            audio.src = "";
            module.setIsPlaying("abort");
        }


        $("#btnPlay").on("click", () => {
            module.pause();
            module.play();
        });

        $("#btnPause").on("click", () => {
            module.pause();
        });

        document
            .getElementById("cover")
            .setAttribute("src", currentMusic.picture);
        audio.setAttribute("src", streamUrl);

        audio.addEventListener("playing", () => {
            isPlaying = true;
            module.setIsPlaying("playing");
        });
        audio.addEventListener("abort", () => {
            isPlaying = false;
            module.setIsPlaying("abort");
        });
        audio.addEventListener("waiting", () => {
            isPlaying = false;
            module.setIsPlaying("waiting");
        });

