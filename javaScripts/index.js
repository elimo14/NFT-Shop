var app = angular.module('indexApp', []);
app.controller('ctrl1', function ($scope, $timeout) {
    $scope.pagenumber = 1;

    $scope.profileArray = [
        { name: 'Luminaire', username: '@Luminaire_Lucianesia' } //{src:'...',name:'Luminaire',username:'@Luminaire_Lucianesia'}
    ]

    $scope.balance = 1.9015208;

    // $scope.day = new Date().getDay(); //"24 jul 2021";
    // $scope.month = new Date().getMonth();
    // $scope.year = new Date().getFullYear();
    $scope.date = "24 jul 2021"; //[$scope.day , $scope.month , $scope.year] 

    $scope.recentActivityArray = [
        { circlClass: 'CircleActivity1', titreAct1Class: 'titreAct1', actName: 'Blocksai Fukienta', ExplainAct1Class: 'ExplainAct1', action: 'liked your post', timeAct1Class: 'timeAct1', time: '15 min ago' },
        { circlClass: 'CircleActivity2', titreAct1Class: 'titreAct2', actName: 'NFT Pixel Project', ExplainAct1Class: 'ExplainAct2', action: '1 edition listed', timeAct1Class: 'timeAct2', time: '30 min ago' },
        { circlClass: 'CircleActivity3', titreAct1Class: 'titreAct3', actName: 'Beobe sessed', ExplainAct1Class: 'ExplainAct3', action: 'transferd from xxx', timeAct1Class: 'timeAct3', time: '45 min ago' }
    ]

    $scope.NftArtistName = 'Gabriel Dean';
    $scope.NftName = 'Elon&Doge | Smart-Toy';

    $scope.AucTime = 'Auction ending in';

    $scope.currentBidPrice = '0.0840 BTC'



    var countDownDate = new Date("Jan 5, 2024 23:53:25").getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();
        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('h').innerHTML = hours;
        document.getElementById('m').innerHTML = minutes;
        document.getElementById('s').innerHTML = seconds;

        //console.log(hours, minutes, seconds);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('h').innerHTML = 0;
            document.getElementById('m').innerHTML = 0;
            document.getElementById('s').innerHTML = 0;
        }
    }, 1000);



    $scope.TopArtistsInfo = [
        {ArtisName:'Gabriel Dean',ArtistsWorks:'410 items'},
        {ArtisName:'Mathew Lean',ArtistsWorks:'380 items'},
        {ArtisName:'Santel bauer',ArtistsWorks:'320 items'}
    ]

    $scope.TopArtistHiden = [
        { ArtisName: 'Gabriel Dean', ArtistsWorks: '410 items' },
        { ArtisName: 'Mathew Lean', ArtistsWorks: '380 items' },
        { ArtisName: 'Santel bauer', ArtistsWorks: '320 items' },
        { ArtisName: 'Gabriel Dean', ArtistsWorks: '410 items' },
        { ArtisName: 'Mathew Lean', ArtistsWorks: '380 items' },
        { ArtisName: 'Santel bauer', ArtistsWorks: '320 items' }
    ]

    $scope.view = true
    $scope.viewAll_Less = function () {
        if ($scope.view){
            document.getElementsByClassName('TopArtistBlock')[0].classList.add('TopArtistBlockExpand');
        }
        else{
            document.getElementsByClassName('TopArtistBlock')[0].classList.remove('TopArtistBlockExpand');
        }
        $scope.view = !$scope.view;
    }
    
    $scope.btnClicked = true;
    $scope.NftBtnClick =  function (){
        $scope.btnClicked = !$scope.btnClicked;
        $scope.catbtnClicked = !$scope.catbtnClicked;
    }

    $scope.othetNFTArray = [
        {imgSrc:'images/nft1.jpeg', NftsName:'Vitalik Buterin', priceNft:'0.1680', likes:'50',clicked:false},
        {imgSrc:'images/nft1.jpeg', NftsName:'Amygdalae Park', priceNft:'0.2260', likes:'65',clicked:false},
        {imgSrc:'images/nft1.jpeg', NftsName:'Smart Toy', priceNft:'0.1895', likes:'55',clicked:false},
        {imgSrc:'images/nft1.jpeg', NftsName:'Knuckles Echidna', priceNft:'0.1655', likes:'70',clicked:false}
    ]

    $scope.NftLikes = function(item) {
        if (item.clicked == false) {
            item.likes++;
            item.clicked = true;
        }
        else if (item.clicked == true) {
            item.likes--;
            item.clicked = false;
        }
    }

})

const navCount = 1;
document.getElementById(navCount).classList.add('navItemSelect');
function navClick(element) {
    const eId = element.id;
    for (let i = 1; i <= 6; i++) {
        document.getElementById(i).classList.remove('navItemSelect');
        document.getElementById(eId).classList.add('navItemSelect');

    }
}

const catbtnClicked = 7;
document.getElementById(catbtnClicked).classList.add('categoryBtnSelected');
function CatNftBtnClick(element){
    const eId = element.id;
    for (let i = 7; i <= 11; i++) {
        document.getElementById(i).classList.remove('categoryBtnSelected');
        document.getElementById(eId).classList.add('categoryBtnSelected');

    }
}