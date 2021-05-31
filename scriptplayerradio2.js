// PLAYER RADIO 2

const audio1 = document.getElementById("jp_audio_2");
        let isPlaying1 = false;
        let distillerieSonoreIconSrc1 = "./Ressources/Images/LOGO-LIVE-2.png"

        let currentMusic1 = {
            track: "",
            title: "LIVE 2",
            artist: "TAPE HOUSE",
            picture: distillerieSonoreIconSrc1,
        };
        const streamUrl1 = "https://manager6.streamradio.fr:2015/stream";
        //   props: track, title, artist, picture
        const apiUrl1 =
            "https://api.moncmsradio.fr/manager.php?url=https://manager6.streamradio.fr:2000&server=1";

        const module1 =  {};
        module1.getCurrentMusic1 = (callback) => {
            $.ajax({
                url: apiUrl1,
                method: "get",
            }).done(callback);
        };
        module1.updateUI = () => {
            document.getElementById("titre-1").innerText = currentMusic1.title;
            document.getElementById("artist-1").innerText = currentMusic1.artist;
            document.getElementById("titre-11").innerText = currentMusic1.title;
            document.getElementById("artist-11").innerText = currentMusic1.artist;
            document.getElementById("titre-12").innerText = currentMusic1.title;
            document.getElementById("artist-12").innerText = currentMusic1.artist;
            document.getElementById("titre-13").innerText = currentMusic1.title;
            document.getElementById("artist-13").innerText = currentMusic1.artist;
            document.getElementById("titre-14").innerText = currentMusic1.title;
            document.getElementById("artist-14").innerText = currentMusic1.artist;
            document.getElementById("titre-15").innerText = currentMusic1.title;
            document.getElementById("artist-15").innerText = currentMusic1.artist;
            document.getElementById("titre-16").innerText = currentMusic1.title;
            document.getElementById("artist-16").innerText = currentMusic1.artist;
            document.getElementById("titre-17").innerText = currentMusic1.title;
            document.getElementById("artist-17").innerText = currentMusic1.artist;
            document.getElementById("titre-18").innerText = currentMusic1.title;
            document.getElementById("artist-18").innerText = currentMusic1.artist;
            document.getElementById("titre-19").innerText = currentMusic1.title;
            document.getElementById("artist-19").innerText = currentMusic1.artist;
            document.getElementById("titre-110").innerText = currentMusic1.title;
            document.getElementById("artist-110").innerText = currentMusic1.artist;
            document.getElementById("titre-111").innerText = currentMusic1.title;
            document.getElementById("artist-111").innerText = currentMusic1.artist;
            document.getElementById("titre-112").innerText = currentMusic1.title;
            document.getElementById("artist-112").innerText = currentMusic1.artist;
            document.getElementById("titre-113").innerText = currentMusic1.title;
            document.getElementById("artist-113").innerText = currentMusic1.artist;
            document.getElementById("titre-114").innerText = currentMusic1.title;
            document.getElementById("artist-114").innerText = currentMusic1.artist;
            document.getElementById("titre-115").innerText = currentMusic1.title;
            document.getElementById("artist-115").innerText = currentMusic1.artist;
            document.getElementById("titre-116").innerText = currentMusic1.title;
            document.getElementById("artist-116").innerText = currentMusic1.artist;
            document.getElementById("titre-117").innerText = currentMusic1.title;
            document.getElementById("artist-117").innerText = currentMusic1.artist;
            document.getElementById("titre-118").innerText = currentMusic1.title;
            document.getElementById("artist-118").innerText = currentMusic1.artist;
            document.getElementById("titre-119").innerText = currentMusic1.title;
            document.getElementById("artist-119").innerText = currentMusic1.artist;
            document.getElementById("titre-120").innerText = currentMusic1.title;
            document.getElementById("artist-120").innerText = currentMusic1.artist;
            document.getElementById("titre-121").innerText = currentMusic1.title;
            document.getElementById("artist-121").innerText = currentMusic1.artist;
            document.getElementById("titre-122").innerText = currentMusic1.title;
            document.getElementById("artist-122").innerText = currentMusic1.artist;
            document.getElementById("titre-123").innerText = currentMusic1.title;
            document.getElementById("artist-123").innerText = currentMusic1.artist;
            document.getElementById("titre-124").innerText = currentMusic1.title;
            document.getElementById("artist-124").innerText = currentMusic1.artist;
            document.getElementById("titre-125").innerText = currentMusic1.title;
            document.getElementById("artist-125").innerText = currentMusic1.artist;
            document.getElementById("titre-126").innerText = currentMusic1.title;
            document.getElementById("artist-126").innerText = currentMusic1.artist;
            document.getElementById("titre-127").innerText = currentMusic1.title;
            document.getElementById("artist-127").innerText = currentMusic1.artist;
            document.getElementById("titre-128").innerText = currentMusic1.title;
            document.getElementById("artist-128").innerText = currentMusic1.artist;
            document.getElementById("titre-129").innerText = currentMusic1.title;
            document.getElementById("artist-129").innerText = currentMusic1.artist;
            document.getElementById("titre-130").innerText = currentMusic1.title;
            document.getElementById("artist-130").innerText = currentMusic1.artist;
            document.getElementById("titre-131").innerText = currentMusic1.title;
            document.getElementById("artist-131").innerText = currentMusic1.artist;
            document.getElementById("titre-132").innerText = currentMusic1.title;
            document.getElementById("artist-132").innerText = currentMusic1.artist;
            document.getElementById("titre-133").innerText = currentMusic1.title;
            document.getElementById("artist-133").innerText = currentMusic1.artist;
            document.getElementById("titre-134").innerText = currentMusic1.title;
            document.getElementById("artist-134").innerText = currentMusic1.artist;
            document.getElementById("titre-135").innerText = currentMusic1.title;
            document.getElementById("artist-135").innerText = currentMusic1.artist;
            document.getElementById("titre-136").innerText = currentMusic1.title;
            document.getElementById("artist-136").innerText = currentMusic1.artist;
            document.getElementById("titre-137").innerText = currentMusic1.title;
            document.getElementById("artist-137").innerText = currentMusic1.artist;
            document.getElementById("titre-138").innerText = currentMusic1.title;
            document.getElementById("artist-138").innerText = currentMusic1.artist;
            document.getElementById("titre-139").innerText = currentMusic1.title;
            document.getElementById("artist-139").innerText = currentMusic1.artist;
            document.getElementById("titre-140").innerText = currentMusic1.title;
            document.getElementById("artist-140").innerText = currentMusic1.artist;
            document.getElementById("titre-141").innerText = currentMusic1.title;
            document.getElementById("artist-141").innerText = currentMusic1.artist;
            document.getElementById("titre-142").innerText = currentMusic1.title;
            document.getElementById("artist-142").innerText = currentMusic1.artist;
            document.getElementById("titre-143").innerText = currentMusic1.title;
            document.getElementById("artist-143").innerText = currentMusic1.artist;
            document.getElementById("titre-144").innerText = currentMusic1.title;
            document.getElementById("artist-144").innerText = currentMusic1.artist;
            document.getElementById("titre-145").innerText = currentMusic1.title;
            document.getElementById("artist-145").innerText = currentMusic1.artist;
            document.getElementById("titre-146").innerText = currentMusic1.title;
            document.getElementById("artist-146").innerText = currentMusic1.artist;
            document.getElementById("titre-147").innerText = currentMusic1.title;
            document.getElementById("artist-147").innerText = currentMusic1.artist;
            document
                .getElementById("cover-1")
                .setAttribute("src", currentMusic1.picture);
        };
        module1.setIsPlayin = (state) => {
            $("#btnPlay-1").css("display", "none");
            $("#btnPause-1").css("display", "none");
            // $("#loading").css("display", "none");
            if (state == "playing1") {
                $("#btnPlay-1").css("display", "none");
                $("#btnPause-1").css("display", "block");
                // $("#loading").css("display", "none");
                return;
            } else if (state == "abort1") {
                $("#btnPlay-1").css("display", "block");
                $("#btnPause-1").css("display", "none");
                // $("#loading").css("display", "none");

            } else if (state == "waiting1") {
                $("#btnPlay-1").css("display", "none");
                $("#btnPause-1").css("display", "block");
                // $("#loading").css("display", "none");

            } else {}
        };




        setInterval(() => {
            module1.getCurrentMusic1((data) => {
                currentMusic1 = data;
                if (data.picture == null) {
                    currentMusic1.picture = distillerieSonoreIconSrc1; 
                }
            });
            module1.updateUI();

        }, 4000);

        module1.play = () => {

            audio1.src = streamUrl1;
            audio1.play();
            module1.setIsPlayin("playing1");
            module1.updateUI();
        }

        module1.pause = () => {

            audio1.src = "";
            module1.setIsPlayin("abort1");
        }


        $("#btnPlay-1").on("click", () => {
            module.pause();
            module1.play();
        });


        $("#btnPause-1").on("click", () => {
            module1.pause();
        });

        document
            .getElementById("cover-1")
            .setAttribute("src", currentMusic1.picture);
            audio1.setAttribute("src", streamUrl1);

        audio1.addEventListener("playing1", () => {
            isPlaying1 = true;
            module1.setIsPlayin("playing1");
        });
        audio1.addEventListener("abort1", () => {
            isPlaying1 = false;
            module1.setIsPlayin("abort1");
        });
        audio1.addEventListener("waiting1", () => {
            isPlaying1 = false;
            module1.setIsPlayin("waiting1");
        });


        