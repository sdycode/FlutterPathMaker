'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "36f844bb78154c514d1f32b6ce3e4f0f",
".git/config": "6900ae3403909970c04f83f6f56b2794",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "74cc8be27c8db29f2e9352e182abbe55",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ae0aca59ef63354f410372e7cda6a2e",
".git/logs/refs/heads/master": "cb5bc7ab1cd63611a41823d118667319",
".git/logs/refs/remotes/origin/master": "f73682f8cfe1f115f4ecdfc8aabe3473",
".git/objects/01/038c9b596e1ab85216e11f0a0ee81bfd5d5e9b": "0079a8d9985ed411777e1cb8fa0ef1fb",
".git/objects/02/2475a80d8bad1a0212722118a53e7d695b16ff": "b5604b73d498e1a1d319a735b50f3d57",
".git/objects/02/ae71311ce29538540757412ab925c158d3d8de": "71a4477d2cdd31c14dbde334f3d9fc67",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/0d/f53eaaf5c41ab63f36613377e6b21c5517e17c": "af207d6614ab49c7f2e2e0f7f3cce329",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/13/3eea3a94e0db82dd4c54080d480a6f19073b24": "bb55d7e77043d524b162641bc93c69bc",
".git/objects/13/95141f135d2fb7bbc3d3546595593a0dabe610": "2ffa3debb77379e6e6118d1de4a9df68",
".git/objects/14/2165c875892da828671f5481a3f1c5d1cf5ad1": "484cf243251f8babc8daf209d819e3c4",
".git/objects/16/39b198f69b93678e9a142854ab9b9315faf112": "0c6b6510a92b644e769e15fd9f9ecaa8",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/4bcea28aeb1a4bcebedc50df52441f10d2cfa3": "9c69e39de987f2ce7c19e736e37bb33c",
".git/objects/24/160b1ba21fdf26c97d9af594c95a8efcaea43c": "a8eacacb17f4b32e3787f6e3eb54b88f",
".git/objects/24/16752050304bd9adcabc28effe81dd8cad163b": "527a6c524400ac1aa1da19fd84a55568",
".git/objects/24/27d92ba66366f999b54494a1bcdb2757a1c523": "a69f61747ae56ceb793beafa29c28c94",
".git/objects/27/8ca5d709966802be196086ebbff9e4c0a3f8a4": "530dc19f6fbcf3c197dc7a4cd317381a",
".git/objects/27/96cf7f2aba7b6309188a2aa58365dd87d35fc6": "83f6104d7888cc37608cf74ad9a11ccd",
".git/objects/28/139e45a4270bbd39d94451d4158de4a00589eb": "e1201574b31a2f547759ecece8df7cf6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/493e1101af213a6212a005ba248410ffc741ff": "93041426487d0a43c9d4a28337f64d17",
".git/objects/3e/3e25203c61f440f8ff6c35f4a11f57455af336": "f898125dd8f845388d190b4ad4723bb2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/b12a3a1d6a3c90c62ee08ff3e8d56a5bdfc399": "e14206e6202ae19a3dcb3dae3c16afd2",
".git/objects/3f/d9a26963a4bf81efe1c90facb4044edb728ecd": "4f8b895ad02e52106aeceeb9056b2509",
".git/objects/42/e4f065ab90ae32a418a699140f8a7c44579fac": "6b128a8c30afe223ec5e28bbc168189c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5e93209eee4f49348c507173b9f4cc6723f263": "132cd9dda120ae3c419bf25e925fd257",
".git/objects/4d/384d0c21cd0000446171a276c45858ca6547f0": "4fd2fee2a09eed8b5ecff42df84a7d03",
".git/objects/50/69a87b2fe6adfb544c95ae3d30a42466c617bf": "486814e5742553a91eb11e173e5f88c3",
".git/objects/54/0f737318a4abfd72199158bcb5e96f20fd5864": "aa90a7a3e5270e31bc337a62bc21d349",
".git/objects/54/e9aaa8e564c56896b9cccdeebde562307b3bdc": "8225ec0519c05dc189255c6e22f4f75a",
".git/objects/55/b1537072186c595f65839909b5874504ba8e19": "39c82373bef76b264ab50764236be59b",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/59/bfcaff7426763d347bb5b1f72917cab7d408a2": "1f68b5a8ee8e33914a1171f9dc941bde",
".git/objects/5c/159799c3aa40373116b05f1a67230bf3311fcc": "54d1647bdef86016bd60fab659a2175e",
".git/objects/5c/9828952f65007f647d8caf435c1177bf18d845": "abbf307c64b9abc76e0629b88ab830b7",
".git/objects/5f/86e1e39a6df83a15b35abff9a2ab65bb9bdfc0": "ca0559af17fc025bcc7c3ebc2e5effa4",
".git/objects/61/dc0e4b78f45ecfc1916f6ca5e8f2c320bd483d": "443787625634a0e8cc742f1f614c3523",
".git/objects/62/4cfb1a0df17eadc961f96013aa12ae9a897a00": "224b4638942e275bb6dde4bbe9d83b07",
".git/objects/63/2af915fec411dbd26789db36ecb154a41d51d9": "b3e98fa96f58650419d8056f42a46bc0",
".git/objects/65/0d6e79b324d60fff8bd2a5351a9def7ac51fe7": "6124e6b13158a382a423ddb901be32db",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/ecad3561bc2e4c376d7c9118098386a28b8efa": "4421a538764a957addeb6aad9115486f",
".git/objects/69/144556ffc45c2606e6ad7e2928b61232584d39": "d1e5e0efdaeed801cb9746653a36e6d1",
".git/objects/6b/7fae2a369bfc5394444a630437b31fda8f3b39": "4c3ab2d712b53718890e73fc69e82fbc",
".git/objects/6b/9ddcb5ec61d99c4648d5114f91706b30cf734a": "f82d570ca4d22d995a120a4d7dadc94f",
".git/objects/6c/dbbb8f1e341ff5a8f53b47dda425c3a228f97f": "3fe4d8651a1cb17864fb730d63990f6e",
".git/objects/6d/2336f8c9212a356f8bf1724aaaffc48cde6e4f": "9681441d9e02f22e9be9272f74d78b03",
".git/objects/6d/6b06cd1e917a914a921227c5861cdbfc261316": "d90c4ca4dd934b314e9a9ce4ed42dd3d",
".git/objects/71/f00c00ec22bb1bbcb868f3b185dbde2c449031": "c29d26b5bfdde3e92f632618bcfba0be",
".git/objects/74/6293002d632e54473a0f61923aabacf3dbc83f": "d913918f2a7ca05f2dda4b8bb33bf306",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/5bf374a220dbf805d819217790a1a4584771c8": "47c32787a0cc3ebb7bfb82bc62616526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/df9a4bc8f632eae43558cb4db77c94e4c75349": "08e479b6925f4c8e805a646159310bee",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/e19610cc4d8fddbf647763f16eb73d4e7e1351": "75d6b380056ff0338d7ec3f9d29ac63a",
".git/objects/81/f16ce1a53f16377a5f61476e55a82f76212e4d": "a4c1a8c223214197b425333efbd6d113",
".git/objects/83/1ee4de4e42d7977f0412df0c829c864d8a5c41": "57fc67bc585ac1ae24b175fbc87da123",
".git/objects/83/66b1f47923a3a4724eae609d674e192b0c882a": "a7a49e99c005097063ff9d3385628a69",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/96/bc36eabe80cf45a554c4f44797b2be7ddde4f7": "e4466cc68bd913cc770307bff5b81518",
".git/objects/97/4b8ce610e21daa0a45010eae1f3f73d2b353b1": "fdedfc5ad4fa4cb7d4ab63ecce72e592",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/018e613f5c13194adf981121c14a8d0fc1f17e": "d4771c82265c18d6a5b29f82f4928df1",
".git/objects/9c/77ec5ce86cafd361edaae4cbd07c88e93afa87": "0513d0051d3f8191d481f586766c591c",
".git/objects/a0/3fe3f50dca1f83c0fb9501c3c262f1cf079d8c": "75c10e0abd163076e25cd55f0407562a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/a7/e0ad9196c393657d2a9a721aadd2ecb55a0868": "7695834d47616a64573a5e7d56002bd8",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/40275e0a806d870c71fc6c332476425fd16e79": "43d1584f2848115828c0f4b7de1d2cf6",
".git/objects/ae/e3e22af7b53836812f8d83e0edeff787e2fdef": "2ad3483614844602336743d3c610eb4f",
".git/objects/af/dc053e2a021cb33f5fd492b6311436f0ab1a5e": "89ddc4ed947a5d3ca1ace470f235dabc",
".git/objects/b0/2cdd281491f89da15d50122b5c3afb694d0fed": "4e04db02df83f1366733d6e25677cd38",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b5/582acfc11af2563a615a98081e410b169316a0": "2dc45c711b2ab5ec249c15619ce5bcca",
".git/objects/b5/da838c9a15665cebb842335ceeb5015948ce96": "477cf351d6cb69bafa1fb69239e36efb",
".git/objects/b8/b1fd853a50c32537415f6dac091303d1dbc29e": "e589de84155332b361304941f3d1d1a0",
".git/objects/b9/3b400d621b41a52e3371af681d6b6872835519": "3724172814d9b5381b5f8c0824aeaaf6",
".git/objects/ba/9dcac78fd155f5af41b1f8ac27c68a59fdc284": "bb98e27325ea28bb0a250a65d49fd85c",
".git/objects/c5/2bd561b53c63117c32d7d550aa3e4cc1539046": "96eaa62e3930b1b4a598d8578ccc9831",
".git/objects/c9/82ba4f9c04786601027713d782638b529c79dc": "43165f0832fe1140568f2a4a26394aad",
".git/objects/cb/c21ecaffd02f2786cb0e2f62eadd26eba096d5": "b81e93a968d090e878256e00bba4e00e",
".git/objects/cb/c8935ce7f97c70080f26b7df152c83f170bc46": "855b022c0442c1969956e994d64d0439",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/2cf36a36f851b16b3bc2ed06d52ad5b1dfad7b": "61928314a52d30bdde221367d2db56ed",
".git/objects/dc/7a89889aea81f4de2a8024b287ac2316a5b29b": "e48fee2a028280621c0cc13ae01ac3fc",
".git/objects/dc/dd861e86c94c39d1095a325339c2aa7a7349d5": "636d0f275611457a88738440c4627091",
".git/objects/dd/e8f76c12c3e78cdba77b1d238491d9d15fd001": "d6623a699fdb662a8f0e090daeec3b3b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/78f5063f8d819c7a905179a15519519f42f8d9": "33f16ff18e1800eff994ec865799b7e1",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/4622b6f73bb728ede8c2e96f5c7d0516a24626": "18eb5ff06d2d01ff05dcce7a64f4416f",
".git/objects/e0/ffa30157c90895b45310ba4210675b389d02f0": "139ce0f4978c848ee50960ec26a1d64f",
".git/objects/e1/07da8e4e7a259a740efe6a1e0614a85fbd914e": "b70586af58230a4058bcadb6d4bef0ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fd123af7fb5728800a5d8ba450bb96a960c603": "9ecdcbb93af8e0ee1375827be8156888",
".git/objects/f0/36e1b2033c02f98e44ff74d0507380c8ef21e3": "dba3e51e15d6f7746f9bf7f4226d6d84",
".git/objects/f0/f547e0e2991d38f0fb7f9d96f4864577f77105": "147a5390d90d9fe09aa36a86b2a200cb",
".git/objects/f3/3182fc2aef90dfbba7a7e92c0f343112f07546": "45104af2be2c04267b2581e248aa0b8e",
".git/objects/f9/7c93035f7c4d7c391452558f2f8c343700b28c": "15ece7c6c32a59f671e08fb3234a762b",
".git/objects/fe/974e3cc4ee79339e36e8df54cb49aa5a63ed8c": "8b093c07be62c5158fd52eedbb01fda3",
".git/objects/fe/acb925fcc20c93219db9ba846e12363a432217": "a0ee872f1e16773b4c2b6c2af3f658ca",
".git/refs/heads/master": "44fdbe039076978dcb29677a53af52b9",
".git/refs/remotes/origin/master": "44fdbe039076978dcb29677a53af52b9",
"assets/AssetManifest.json": "dd3bb1e74a549f74454ff4050d8f68a7",
"assets/assets/app_icons/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/app_icons/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/app_icons/animation.gif": "3c61734e7bd00a017ff3b8f3c01d7e96",
"assets/assets/app_icons/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/app_icons/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/app_icons/demovideo1thumb.png": "ffba4a93fe7455b4a9dea52dc8990c70",
"assets/assets/app_icons/filter.png": "9074e65aae7a83cb965e2e920196250f",
"assets/assets/app_icons/flutter3dp.png": "bbe200a8fb8cedc951688ae345855fe2",
"assets/assets/app_icons/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/app_icons/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/app_icons/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/app_icons/gradient.png": "a2e66b804bc2e6d9f2f72de16428e480",
"assets/assets/app_icons/gradientAnim.gif": "8eaafbc16c56e3724d09de01e98e3697",
"assets/assets/app_icons/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/app_icons/loading.gif": "f842e82a10bab3222ee88c3b16a5dfb5",
"assets/assets/app_icons/loadinganimnobg.gif": "236d689f90e506cb19eedae4af39d6f5",
"assets/assets/app_icons/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/app_icons/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/app_icons/nature.jpg": "7164eb969b59913277ab196795886f86",
"assets/assets/app_icons/notes.png": "b638a4773e56aa0fdf3e3db9aa933fbe",
"assets/assets/app_icons/paint.png": "b8d57b50ce9385c8cd6b3dc3a0f2807e",
"assets/assets/app_icons/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/app_icons/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/app_icons/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/app_icons/signout.png": "5e7897e17163218d5e6c4403dcd67720",
"assets/assets/app_icons/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/app_icons/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/app_icons/webapp.png": "0293c74f9fc9bd0dc64da0ed598fd0de",
"assets/assets/app_icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/assets/Arapey-Regular.ttf": "0b5809c6e02a643b712fa7ca1db11944",
"assets/assets/curvePointIcons/angleNonSymmetric.png": "9af5c123cd8b5b7bb5188c4987c1b470",
"assets/assets/curvePointIcons/arcicon.png": "8bb1fa8214becf232e46e3e08e89827d",
"assets/assets/curvePointIcons/nonsymmetricicon.png": "f5910a6d1d06096bc11cad79cbe0131d",
"assets/assets/curvePointIcons/normal.png": "6536ee93e2b72203e6382a1c791acddb",
"assets/assets/curvePointIcons/symmetricicon.png": "2aebedb9d2e576a78c737a7197f18053",
"assets/assets/custompath1%2520(9).json": "8d6d7f2bb4ec7c322a873e71d8ba74c8",
"assets/assets/icons/file.png": "340dff2cfcdad09e41994dc4913f3a5e",
"assets/assets/icons/files.png": "d442a59ef40fdfe86cdba3a0c0a54b16",
"assets/assets/icons/newfile.png": "ab9bd06f3b423ed18993c8eaa28bf826",
"assets/assets/icons/openfile.png": "31a6ce3697d2d02c2b669a9ae8e1d981",
"assets/assets/icons/pan.png": "a219f48efde11344f32feceede563347",
"assets/assets/icons/save.png": "35a163a812178b8ece17bddebbef96b5",
"assets/assets/icons/saveas.png": "5ae1e977df25b7de91e7ad0ef6683739",
"assets/assets/icons/translate.png": "ae17b023ed09334f8fe3b1374b395cc5",
"assets/assets/icons/translate_arrow.png": "b1ca9bdab309012ecc1fac03e72ea67a",
"assets/assets/icons/translate_arrow_transp.png": "9ee674374edfad8ddce2fb1b271b4390",
"assets/assets/icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/assets/sample%2520files/car.json": "60fe95d47057452df85559683b14f703",
"assets/assets/sample%2520files/circle.json": "56e7277ee760d5c250ade43ddff92b81",
"assets/assets/sample%2520files/face.json": "493c4788710f5104a21eb0be5b9a039c",
"assets/assets/sample%2520files/heart.json": "2a95d90c272f8f0025ed880eea3d5eae",
"assets/assets/sample%2520files/heart1.json": "c2c335e105863addbf1bc16d6cedb7db",
"assets/assets/sample%2520files/hhh.json": "4f339a068aa5f98e16b8ca4e481f10a0",
"assets/assets/sample%2520files/pentagon.json": "bfe2b53e99b326787a3fe2c3a1b31a5c",
"assets/assets/sample%2520files/sample1.json": "a3800e35f7762f621a6bc1709582e226",
"assets/assets/sample%2520files/star5.json": "19787e9bd56478932229e914c187409f",
"assets/assets/sample%2520files/wave.json": "caf076b86e7446f7d412a4e70ec703a9",
"assets/assets/sampleImage/code1.png": "a710a7eab4bd042b4614ae887972cc91",
"assets/assets/sampleImage/duck.jpg": "a156ee83ca730b5a351bc4c52cbaa747",
"assets/assets/sampleImage/duck.png": "7709bdbb6c9b50bfe85d4f0929d18f26",
"assets/assets/thr111.json": "293b311339d5f0a955c458118bf57705",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1ef462b38473d84f530c39658999936a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "14d221d164c9b233aa741ea48628f687",
"icons/android-chrome-512x512.png": "24489ae2b6f85820643c4d7065f6a8d9",
"icons/apple-touch-icon.png": "0491bd17f3eac3bd43f5422d6ffcaa1b",
"index.html": "429f80a843c1dfd0d1d3a94bb99655c4",
"/": "429f80a843c1dfd0d1d3a94bb99655c4",
"logo.png": "14d221d164c9b233aa741ea48628f687",
"main.dart.js": "aa6a19f7093299c219c677edb6df4a63",
"manifest.json": "38d96864e11bbd3f23701ac5b651d525",
"version.json": "01aefe83deffaae12221b30947dbfe65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
