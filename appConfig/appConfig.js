var path = {
	"cdn": "https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/",
};
var appConfig = {
	'title' : 'QhomeDesign',
    'icon'  : path.cdn + 'images/logo.jpg',
	'logo': path.cdn + 'images/logo.jpg',
	'folder': path.cdn + 'images/folder.svg',
};

var menuObj = {
	menu: [
		{
			level: 0,
			title: 'Home',
			router: '',
			submenu: null
		},
		{
			level: 0,
			title: 'About Us',
			router: 'about_us',
			submenu: null
		},
		{
			level: 0,
			title: 'Gallery',
			router: 'gallery',
			submenu: [
				{
					title: 'Kitchen',
					router: 'kitchen',
					submenu: null
				},
				{
					title: 'Bathroom',
					router: 'bathroom',
					submenu: null
				},
				{
					title: 'Laudry',
					router: 'laudry',
					submenu: null
				},
				{
					title: 'Vanity',
					router: 'vanity',
					submenu: null
				},
				{
					title: 'Study',
					router: 'study',
					submenu: null
				},
				{
					title: 'WIR',
					router: 'wir',
					submenu: null
				},
				{
					title: 'Office Furniture',
					router: 'office_furniture',
					submenu: null
				}
			]
		},
		{
			level: 0,
			title: 'Products',
			router: 'products',
			submenu: [
				{
					title: 'Door',
					router: 'door',
					submenu: [
						{
							title: 'Melamine Door',
							router: 'melamine_door',
							submenu: null
						},
						{
							title: 'Laminate Door',
							router: 'laminate_door',
							submenu: null
						},
						{
							title: '2PAC Door',
							router: '2pac_door',
							submenu: null
						},
						{
							title: 'Molded Door',
							router: 'molded_door',
							submenu: null
						},
						{
							title: 'Glass Door',
							router: 'glass_door',
							submenu: null
						}
					]
				},
				{
					title: 'Standard Cabinet',
					router: 'standard_cabinet',
					submenu: [
						{
							title: 'Base Cabinet',
							router: 'base_cabinet',
							submenu: null
						},
						{
							title: 'Drawer Cabinet',
							router: 'drawer_cabinet',
							submenu: null
						},
						{
							title: 'Sink Cabinet',
							router: 'sink_cabinet',
							submenu: null
						},
						{
							title: 'Base Corner Cabinet',
							router: 'base_corner_cabinet',
							submenu: null
						},
						{
							title: 'Blind Corner Cabinet',
							router: 'blind_corner_cabinet',
							submenu: null
						},
						{
							title: 'Appliance Cabinet',
							router: 'appliance_cabinet',
							submenu: null
						},
						{
							title: 'Overhead Cabinet',
							router: 'overhead_cabinet',
							submenu: null
						},
						{
							title: 'Range hood Cabinet',
							router: 'range_hood_cabinet',
							submenu: null
						},
            			{
							title: 'Open Shelf',
							router: 'open_shelf',
							submenu: null
						},
						{
							title: 'Corner Open Shelf',
							router: 'corner_open_shelf',
							submenu: null
						},
						{
							title: 'Pantry',
							router: 'pantry',
							submenu: null
						},
						{
							title: 'Fridge Cabinet',
							router: 'fridge_cabinet',
							submenu: null
						}
					]
				},
				{
					title: 'Hardware',
					router: 'hardware',
					submenu: [
						{
							title: 'Hinge',
							router: 'hinge',
							submenu: null
						},
						{
							title: 'Drawer System',
							router: 'drawer_system',
							submenu: null
						},
            						{
							title: 'Sliding Door System',
							router: 'sliding_door_system',
							submenu: null
						},
						{
							title: 'Lift up System',
							router: 'lift_up_system',
							submenu: null
						},
						{
							title: 'other',
							router: 'other',
							submenu: null
						}
					]
				},
				{
					title: 'Bench top',
					router: 'bench_top',
					submenu: null
				}
			]
		},
		{
			level: 0,
			title: 'Contact Us',
			router: 'contact_us',
			submenu: null
		}
	]
};

var paramsString = {
	"homeBanner" : {
		'banner': "assetPath.img +'Overflight-1400px.jpg'",
		"title" : "Qhomedesign - Fashing & Smart Maker",
		"content" : "Qhomedesign provide fashing and smart home kichen",
		"showButton" : false,
		'enableCookie'   : false,
	},
	"homeTiles" : [
		{
			'tileImage'	 : path.cdn+'images/home-slider-one.jpg',
			'viewReport' : 'View the Gellery >',
			'tileRouter' : '/gellery'
        },
		{
			'tileImage'	 : path.cdn+'images/home-slider-two.jpg',
			'viewReport' : 'View the Product List >',
			'tileRouter' : '/product-list'
		},
	],
	"partnerLink" : [
		{	'partnerLogo'	: path.cdn+'images/polytec.png',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/formica.jpg',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/eurofit.png',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/hafele.png',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/laminex.png',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/blum.png',
			'partnerUrl'	: '',
        },
		{	'partnerLogo'	: path.cdn+'images/caesarstone.png',
			'partnerUrl'	: '',
        },
	],
	"footer" : {
		'copyright'		: "© 2020 Qhomedesign",
		'privacy'       : "",
		'contact'       : "Contact Us",
		'footerSlogan'	: "Smart & Fashing Made By"
	},
	"partner": "OUR PARTNERS",
	"contact1Title"	: "Sales",
	"contactInfo1" : [
		{
			"category" : "Contact",
			"description" : "Mark 0401601086(MP)"
		},
		{
			"category" : "Contact",
			"description" : "Maggie 0439590727(MP)"
		},
		{
			"category" : "Email",
			"description" : "qinghaoptyltd_2018@163.com"
		},
	],
	"contact2Title"	: "Manufacturing Factory in Melbourne",
	"contactInfo2" : [
		{
			"category" : "Address",
			"description" : "unit 1 7-15 Valley St, Oakleigh South VIC 3167"
		},
		{
			"category" : "Contact",
			"description" : "Mark 0401601086(MP)"
		},
		{
			"category" : "Email",
			"description" : "qhomedesign001@gmail.com"
		},
	],
	"mapTitle"	: "Find our factory",
	"mapImage"	: path.cdn+'images/map.png',
};
