const Teams = [
    {
        id: "FR-21/22-01",
        name: "Anger SCO",
        short_name: "Anger",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Logo_Angers_SCO_-_2021.svg/langfr-800px-Logo_Angers_SCO_-_2021.svg.png",
    },
    {
        id: "FR-21/22-02",
        name: "AS Monaco",
        short_name: "Monaco",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/519px-Logo_AS_Monaco_FC_-_2021.svg.png"
    },
    {
        id: "FR-21/22-03",
        name: "AS Saint-Etienne",
        short_name: "St Etienne",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/68/LOGO_ASSE_2000.svg/langfr-800px-LOGO_ASSE_2000.svg.png"
    },
    {
        id: "FR-21/22-04",
        name: "Clermont Foot 63",
        short_name: "Clermont",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Logo_Clermont_Foot_63_2013.svg/langfr-800px-Logo_Clermont_Foot_63_2013.svg.png"
    },
    {
        id: "FR-21/22-05",
        name: "ES Troyes AC",
        short_name: "Troyes",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Logo_estac_troyes_chrome.png/800px-Logo_estac_troyes_chrome.png"
    },
    {
        id: "FR-21/22-06",
        name: "FC Lorient",
        short_name: "Lorient",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Logo_FC_Lorient_Bretagne-Sud.svg/langfr-800px-Logo_FC_Lorient_Bretagne-Sud.svg.png"
    },
    {
        id: "FR-21/22-07",
        name: "FC Metz",
        short_name: "Metz",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FC_Metz_2021_Logo.svg/langfr-800px-FC_Metz_2021_Logo.svg.png"
    },
    {
        id: "FR-21/22-08",
        name: "FC Nantes",
        short_name: "Nantes",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/langfr-800px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png"
    },
    {
        id: "FR-21/22-09",
        name: "Girondins de Bordeaux",
        short_name: "Bordeaux",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/76/Logo_des_Girondins_de_Bordeaux.svg/langfr-800px-Logo_des_Girondins_de_Bordeaux.svg.png"
    },
    {
        id: "FR-21/22-10",
        name: "LOSC Lille",
        short_name: "Lille",
        league: ["Ligue 1", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_LOSC_Lille_2018.svg/langfr-1024px-Logo_LOSC_Lille_2018.svg.png"
    },
    {
        id: "FR-21/22-11",
        name: "Montpellier HSC",
        short_name: "Montpellier",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Montpellier_H%C3%A9rault_Sport_Club_%28logo%2C_2000%29.svg/langfr-1024px-Montpellier_H%C3%A9rault_Sport_Club_%28logo%2C_2000%29.svg.png"
    },
    {
        id: "FR-21/22-12",
        name: "OGC Nice",
        short_name: "Nice",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo_OGC_Nice_2013.svg/langfr-800px-Logo_OGC_Nice_2013.svg.png"
    },
    {
        id: "FR-21/22-13",
        name: "Olympique de Marseille",
        short_name: "Marseille",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/langfr-800px-Logo_Olympique_de_Marseille.svg.png"
    },
    {
        id: "FR-21/22-14",
        name: "Olympique lyonnais",
        short_name: "Lyon",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/langfr-800px-Olympique_lyonnais_%28logo%29.svg.png"
    },
    {
        id: "FR-21/22-15",
        name: "Paris Saint-Germain",
        short_name: "PSG",
        league: ["Ligue 1", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/langfr-1024px-Paris_Saint-Germain_Logo.svg.png"
    },
    {
        id: "FR-21/22-16",
        name: "RC Lens",
        short_name: "Lens",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3c/Logo_RC_Lens_2014.svg/langfr-800px-Logo_RC_Lens_2014.svg.png"
    },
    {
        id: "FR-21/22-17",
        name: "RC Strasbourg",
        short_name: "Strasbourg",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/70/Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg/langfr-1024px-Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg.png"
    },
    {
        id: "FR-21/22-18",
        name: "Stade brestois 29",
        short_name: "Brest",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/14/Logo_Stade_Brestois.svg/langfr-800px-Logo_Stade_Brestois.svg.png"
    },
    {
        id: "FR-21/22-19",
        name: "Stade de Reims",
        short_name: "Reims",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0a/Logo_Stade_de_Reims_-_2020_%28alternatif%29.svg/langfr-800px-Logo_Stade_de_Reims_-_2020_%28alternatif%29.svg.png"
    },
    {
        id: "FR-21/22-20",
        name: "Stade rennais FC",
        short_name: "Rennes",
        league: ["Ligue 1"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e9/Logo_Stade_Rennais_FC.svg/langfr-800px-Logo_Stade_Rennais_FC.svg.png"
    },
    {
        id: "DE-21/22-01",
        name: "Bayern Munich",
        short_name: "Bayern Munich",
        league: ["Bundesliga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/langfr-1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
    },
    {
        id: "DE-21/22-02",
        name: "RB Leipzig",
        short_name: "RB Leipzig",
        league: ["Bundesliga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/04/RB_Leipzig_2014_logo.svg/langfr-1920px-RB_Leipzig_2014_logo.svg.png"
    },
    {
        id: "DE-21/22-03",
        name: "Borussia Dortmund",
        short_name: "Dortmund",
        league: ["Bundesliga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/langfr-1024px-Borussia_Dortmund_logo.svg.png"
    },
    {
        id: "DE-21/22-04",
        name: "Hertha Berlin",
        short_name: "Hertha Berlin",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Hertha_BSC_Logo_2012.svg/langfr-1024px-Hertha_BSC_Logo_2012.svg.png"
    },
    {
        id: "DE-21/22-05",
        name: "SC Fribourg",
        short_name: "Fribourg",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/SC_Freiburg_%28logo%29.svg/langfr-800px-SC_Freiburg_%28logo%29.svg.png"
    },
    {
        id: "DE-21/22-06",
        name: "TSG Hoffenheim",
        short_name: "Hoffenheim",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/langfr-800px-Logo_TSG_Hoffenheim.svg.png"
    },
    {
        id: "DE-21/22-07",
        name: "FSV Mayence 05",
        short_name: "Mayence",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/5b/FSV_Mainz_05.png"
    },
    {
        id: "DE-21/22-08",
        name: "Bayern Leverkusen",
        short_name: "Bayern Leverkusen",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4a/Bayer_04_Leverkusen_%28logo%29.svg/langfr-1280px-Bayer_04_Leverkusen_%28logo%29.svg.png"
    },
    {
        id: "DE-21/22-09",
        name: "FC Cologne",
        short_name: "FC Cologne",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f6/FC_Cologne_%28logo%29.svg/langfr-800px-FC_Cologne_%28logo%29.svg.png"
    },
    {
        id: "DE-21/22-10",
        name: "Borussia Mönchengladbach",
        short_name: "Mönchengladbach",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/langfr-800px-Borussia_M%C3%B6nchengladbach_logo.svg.png"
    },
    {
        id: "DE-21/22-11",
        name: "FC Augsbourg",
        short_name: "FC Augsbourg",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fd/FC_Augsburg_-_Logo.svg/langfr-800px-FC_Augsburg_-_Logo.svg.png"
    },
    {
        id: "DE-21/22-12",
        name: "FC Union Berlin",
        short_name: "Union Berlin",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0a/1._FC_Union_Berlin_-_Logo.svg/langfr-1920px-1._FC_Union_Berlin_-_Logo.svg.png"
    },
    {
        id: "DE-21/22-13",
        name: "VfL Wolfsbourg",
        short_name: "Wolfsbourg",
        league: ["Bundesliga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo-VfL-Wolfsburg.svg/langfr-1024px-Logo-VfL-Wolfsburg.svg.png"
    },
    {
        id: "DE-21/22-14",
        name: "Eintracht Francfort",
        short_name: "Eintrach Francfort",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/langfr-1024px-Eintracht_Frankfurt_Logo.svg.png"
    },
    {
        id: "DE-21/22-15",
        name: "VfL Bochum",
        short_name: "Bochum",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VfL_Bochum_logo.svg/langfr-800px-VfL_Bochum_logo.svg.png"
    },
    {
        id: "DE-21/22-16",
        name: "Arminia Bielefeld",
        short_name: "Arminia Bielefeld",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e5/Logo_Arminia_Bielefeld.svg/langfr-1024px-Logo_Arminia_Bielefeld.svg.png"
    },
    {
        id: "DE-21/22-17",
        name: "VfB Stuttgart",
        short_name: "Stuttgart",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/langfr-800px-VfB_Stuttgart_1893_Logo.svg.png"
    },
    {
        id: "DE-21/22-18",
        name: "SpVgg Greuther Furth",
        short_name: "Greuther Furth",
        league: ["Bundesliga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/6d/SpVgg_Greuther_F%C3%BCrth_logo.svg/langfr-800px-SpVgg_Greuther_F%C3%BCrth_logo.svg.png"
    },
    {
        id: "ES-21/22-01",
        name: "Atlético de Madrid",
        short_name: "Atl Madrid",
        league: ["Liga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/93/Logo_Atl%C3%A9tico_Madrid_2017.svg/langfr-800px-Logo_Atl%C3%A9tico_Madrid_2017.svg.png"
    },
    {
        id: "ES-21/22-02",
        name: "Real Madrid",
        short_name: "Real Madrid",
        league: ["Liga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/langfr-800px-Logo_Real_Madrid.svg.png"
    },
    {
        id: "ES-21/22-03",
        name: "FC Barcelone",
        short_name: "Barcelone",
        league: ["Liga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/langfr-1024px-Logo_FC_Barcelona.svg.png"
    },
    {
        id: "ES-21/22-04",
        name: "Séville FC",
        short_name: "Séville",
        league: ["Liga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f1/Logo_Sevilla_FC.svg/langfr-800px-Logo_Sevilla_FC.svg.png"
    },
    {
        id: "ES-21/22-05",
        name: "Real Sociedad",
        short_name: "Real Sociedad",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f1/Real_Sociedad_logo.svg/langfr-800px-Real_Sociedad_logo.svg.png"
    },
    {
        id: "ES-21/22-06",
        name: "Real Betis",
        short_name: "Real Betis",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/13/Real_betis_logo.svg/langfr-1024px-Real_betis_logo.svg.png"
    },
    {
        id: "ES-21/22-07",
        name: "Villarreal CF",
        short_name: "Villarreal",
        league: ["Liga", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/70/Villarreal_CF_logo.svg/langfr-800px-Villarreal_CF_logo.svg.png"
    },
    {
        id: "ES-21/22-08",
        name: "Celta de Vigo",
        short_name: "Celta Vigo",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b7/Logo_RC_Celta_Vigo.svg/langfr-800px-Logo_RC_Celta_Vigo.svg.png"
    },
    {
        id: "ES-21/22-09",
        name: "Grenade CF",
        short_name: "Grenade",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Logo_Granada_CF.svg/langfr-800px-Logo_Granada_CF.svg.png"
    },
    {
        id: "ES-21/22-10",
        name: "Athletic Bilbao",
        short_name: "Ath  Bilbao",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/28/Logo_Atlhetic_Bilbao_1995.svg/langfr-800px-Logo_Atlhetic_Bilbao_1995.svg.png"
    },
    {
        id: "ES-21/22-11",
        name: "CA Osasuna",
        short_name: "Osasuna",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/99/Logo_CA_Osasuna.svg/langfr-800px-Logo_CA_Osasuna.svg.png"
    },
    {
        id: "ES-21/22-12",
        name: "Cadix CF",
        short_name: "Cadix",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/C%C3%A1diz_CF_logo.svg/langfr-800px-C%C3%A1diz_CF_logo.svg.png"
    },
    {
        id: "ES-21/22-13",
        name: "Valence CF",
        short_name: "Valence",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/13/Logo_Valencia_CF_2009.svg/langfr-800px-Logo_Valencia_CF_2009.svg.png"
    },
    {
        id: "ES-21/22-14",
        name: "Levante UD",
        short_name: "Levante",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Logo_Levante_UD_2010.svg/langfr-800px-Logo_Levante_UD_2010.svg.png"
    },
    {
        id: "ES-21/22-15",
        name: "Getafe CF",
        short_name: "Getafe",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Getafe_%28logo%29.svg/langfr-1024px-Getafe_%28logo%29.svg.png"
    },
    {
        id: "ES-21/22-16",
        name: "Deportivo Alaves",
        short_name: "Dep Alaves",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/langfr-1024px-Deportivo_Alaves_logo_%282020%29.svg.png"
    },
    {
        id: "ES-21/22-17",
        name: "Elche CF",
        short_name: "Elche",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a7/Elche_CF_logo.svg/langfr-800px-Elche_CF_logo.svg.png"
    },
    {
        id: "ES-21/22-18",
        name: "Espanyol de Barcelone",
        short_name: "Esp Barcelone",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Logo_RCD_Espanyol_Barcelona_2005.svg/langfr-800px-Logo_RCD_Espanyol_Barcelona_2005.svg.png"
    },
    {
        id: "ES-21/22-19",
        name: "RCD Majorque",
        short_name: "Majorque",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/97/RCD_Mallorca_%28logo%29.svg/langfr-800px-RCD_Mallorca_%28logo%29.svg.png"
    },
    {
        id: "ES-21/22-20",
        name: "Rayo Vallecano",
        short_name: "Rayo Vallecano",
        league: ["Liga"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/12/Rayo_vallecano_madrid.svg/langfr-1024px-Rayo_vallecano_madrid.svg.png"
    },
    {
        id: "IT-21/22-01",
        name: "Atalanta Bergame",
        short_name: "Atalanta Bergame",
        league: ["Seri A", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/81/Logo_Atalanta_Bergamo.svg/langfr-800px-Logo_Atalanta_Bergamo.svg.png"
    },
    {
        id: "IT-21/22-02",
        name: "Bologne FC",
        short_name: "Bologne",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fb/Logo_Bologna_FC_-_2018.svg/langfr-800px-Logo_Bologna_FC_-_2018.svg.png"
    },
    {
        id: "IT-21/22-03",
        name: "Cagliari Calcio",
        short_name: "Cagliari",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/61/Cagliari_Calcio_1920.svg/langfr-800px-Cagliari_Calcio_1920.svg.png"
    },
    {
        id: "IT-21/22-04",
        name: "Empoli FC",
        short_name: "Empoli",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dc/Empoli_FC_%28logo%29.svg/langfr-800px-Empoli_FC_%28logo%29.svg.png"
    },
    {
        id: "IT-21/22-05",
        name: "ACF Fiorentina",
        short_name: "Fiorentina",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3a/Logo_ACF_Fiorentina_2003.svg/langfr-800px-Logo_ACF_Fiorentina_2003.svg.png"
    },
    {
        id: "IT-21/22-06",
        name: "Genoa CFC",
        short_name: "Genoa",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_Genoa_CFC_1998.svg/langfr-800px-Logo_Genoa_CFC_1998.svg.png"
    },
    {
        id: "IT-21/22-07",
        name: "Inter Milan",
        short_name: "Inter Milan",
        league: ["Seri A", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/langfr-1024px-FC_Internazionale_Milano_2021.svg.png"
    },
    {
        id: "IT-21/22-08",
        name: "Juventus FC",
        short_name: "Juventus",
        league: ["Seri A", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/langfr-800px-Juventus_FC_2017_icon_%28black%29.svg.png"
    },
    {
        id: "IT-21/22-09",
        name: "SS Lazio",
        short_name: "Lazio",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Logo_Lazio.svg/langfr-1280px-Logo_Lazio.svg.png"
    },
    {
        id: "IT-21/22-10",
        name: "AC Milan",
        short_name: "AC Milan",
        league: ["Seri A", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/langfr-800px-Logo_of_AC_Milan.svg.png"
    },
    {
        id: "IT-21/22-11",
        name: "SSC Naples",
        short_name: "Naples",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/langfr-1024px-SSC_Neapel.svg.png"
    },
    {
        id: "IT-21/22-12",
        name: "AS Rome",
        short_name: "AS Rome",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0e/AS_Roma_Logo_2017.svg/langfr-800px-AS_Roma_Logo_2017.svg.png"
    },
    {
        id: "IT-21/22-13",
        name: "UC Salernitana",
        short_name: "Salernitana",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a4/Unione_Sportiva_Salernitana_1919_%28logo%29.svg/langfr-1024px-Unione_Sportiva_Salernitana_1919_%28logo%29.svg.png"
    },
    {
        id: "IT-21/22-14",
        name: "UC Sampdoria",
        short_name: "Sampdoria",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bd/Logo_Sampdoria.svg/langfr-800px-Logo_Sampdoria.svg.png"
    },
    {
        id: "IT-21/22-15",
        name: "UC Sassuolo",
        short_name: "Sassuolo",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/U.s.sassuolo.svg/langfr-800px-U.s.sassuolo.svg.png"
    },
    {
        id: "IT-21/22-16",
        name: "Torino FC",
        short_name: "Torino",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Torino_FC_Logo.svg/langfr-800px-Torino_FC_Logo.svg.png"
    },
    {
        id: "IT-21/22-17",
        name: "Udinese Calcio",
        short_name: "Udinese",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/ae/Logo_Udinese_Calcio_2010.svg/langfr-1024px-Logo_Udinese_Calcio_2010.svg.png"
    },
    {
        id: "IT-21/22-18",
        name: "Venise FC",
        short_name: "Venise",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a7/Venezia_FC_%28logo%29.svg/langfr-1024px-Venezia_FC_%28logo%29.svg.png"
    },
    {
        id: "IT-21/22-19",
        name: "Hellas Verone",
        short_name: "Hellas Verone",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/langfr-1024px-Hellas_Verona_FC_logo_%282020%29.svg.png"
    },
    {
        id: "IT-21/22-20",
        name: "Spezia Calcio",
        short_name: "Spezia",
        league: ["Seri A"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spezia_Calcio.svg/langfr-1024px-Spezia_Calcio.svg.png"
    },
    {
        id: "UK-21/22-01",
        name: "Arsenal FC",
        short_name: "Arsenal",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/53/Arsenal_FC.svg/langfr-800px-Arsenal_FC.svg.png"
    },
    {
        id: "UK-21/22-02",
        name: "Aston Villa",
        short_name: "Aston Villa",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/67/Logo_Aston_VIlla_FC_2016.svg/langfr-800px-Logo_Aston_VIlla_FC_2016.svg.png"
    },
    {
        id: "UK-21/22-03",
        name: "Brentford FC",
        short_name: "Brentford",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/38/Logo_Brentford_FC_2017.svg/langfr-1024px-Logo_Brentford_FC_2017.svg.png"
    },
    {
        id: "UK-21/22-04",
        name: "Brighton FC",
        short_name: "Brighton",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8c/Logo_Brighton_Hove_Albion_2011.svg/langfr-1024px-Logo_Brighton_Hove_Albion_2011.svg.png"
    },
    {
        id: "UK-21/22-05",
        name: "Burnley FC",
        short_name: "Burnley",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/76/Logo_Burnley_FC_2015.svg/langfr-800px-Logo_Burnley_FC_2015.svg.png"
    },
    {
        id: "UK-21/22-06",
        name: "Chelsea FC",
        short_name: "Chelsea",
        league: ["Premier League", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/51/Logo_Chelsea.svg/langfr-1024px-Logo_Chelsea.svg.png"
    },
    {
        id: "UK-21/22-07",
        name: "Crystal Palace",
        short_name: "Crystal Palace",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0c/Crystal_Palace_FC_logo.svg/langfr-800px-Crystal_Palace_FC_logo.svg.png"
    },
    {
        id: "UK-21/22-08",
        name: "Everton FC",
        short_name: "Everton",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/ef/Logo_Everton_FC_2014.svg/langfr-1024px-Logo_Everton_FC_2014.svg.png"
    },
    {
        id: "UK-21/22-09",
        name: "Leeds United",
        short_name: "Leeds United",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/78/Logo_Leeds_United_FC.svg/langfr-800px-Logo_Leeds_United_FC.svg.png"
    },
    {
        id: "UK-21/22-10",
        name: "Leicester City",
        short_name: "Leicester City",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b6/Leicester_City.svg/langfr-1024px-Leicester_City.svg.png"
    },
    {
        id: "UK-21/22-11",
        name: "Liverpool FC",
        short_name: "Liverpool",
        league: ["Premier League", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_FC_Liverpool.svg/langfr-800px-Logo_FC_Liverpool.svg.png"
    },
    {
        id: "UK-21/22-12",
        name: "Manchester City",
        short_name: "Manchester City",
        league: ["Premier League", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/Logo_Manchester_City_2016.svg/langfr-1024px-Logo_Manchester_City_2016.svg.png"
    },
    {
        id: "UK-21/22-13",
        name: "Manchester United",
        short_name: "Manchester United",
        league: ["Premier League", "Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_Manchester_United.svg/langfr-1024px-Logo_Manchester_United.svg.png"
    },
    {
        id: "UK-21/22-14",
        name: "Newcastle United",
        short_name: "Newcastle United",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/63/Logo_Newcastle_United.svg/langfr-1024px-Logo_Newcastle_United.svg.png"
    },
    {
        id: "UK-21/22-15",
        name: "Norwich City",
        short_name: "Norwich",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8c/Norwich_City.svg/langfr-800px-Norwich_City.svg.png"
    },
    {
        id: "UK-21/22-16",
        name: "Southampton FC",
        short_name: "Southampton",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Southampton_FC.svg/langfr-800px-Southampton_FC.svg.png"
    },
    {
        id: "UK-21/22-17",
        name: "Tottenham Hotspur",
        short_name: "Tottenham",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5c/Logo_Tottenham_Hotspur.svg/langfr-800px-Logo_Tottenham_Hotspur.svg.png"
    },
    {
        id: "UK-21/22-18",
        name: "Watford FC",
        short_name: "Watford",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Logo_Watford_FC_2001.svg/langfr-800px-Logo_Watford_FC_2001.svg.png"
    },
    {
        id: "UK-21/22-19",
        name: "West Ham United",
        short_name: "West Ham",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c2/West_Ham_United_FC_logo.svg/langfr-800px-West_Ham_United_FC_logo.svg.png"
    },
    {
        id: "UK-21/22-20",
        name: "Wolverhampton Wanderers",
        short_name: "Wolverhampton",
        league: ["Premier League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fc/Wolverhampton_Wanderers.svg/langfr-1024px-Wolverhampton_Wanderers.svg.png"
    },
    {
        id: "RU-21/22-01",
        name: "Zénith Saint-Pétersbourg",
        short_name: "St. Petersburg",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/FC_Zenit_1_star_2015_logo.svg/langfr-1280px-FC_Zenit_1_star_2015_logo.svg.png"
    },
    {
        id: "SU-21/22-01",
        name: "Malmö FF",
        short_name: "Malmö FF",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/17/Logo_Malm%C3%B6_FF.svg/langfr-800px-Logo_Malm%C3%B6_FF.svg.png"
    },
    {
        id: "BE-21/22-01",
        name: "FC Bruges",
        short_name: "FC Bruges",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fd/Club_Brugge_KV.svg/langfr-800px-Club_Brugge_KV.svg.png"
    },
    {
        id: "PO-21/22-01",
        name: "FC Porto",
        short_name: "FC Porto",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/FC_Porto_Vitalis_logo.svg/langfr-800px-FC_Porto_Vitalis_logo.svg.png"
    },
    {
        id: "NL-21/22-01",
        name: "Ajax Amsterdam",
        short_name: "Ajax",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Ajax_Amsterdam_Logo.svg/langfr-1024px-Ajax_Amsterdam_Logo.svg.png"
    },
    {
        id: "PO-21/22-02",
        name: "Sporting CP",
        short_name: "Sporting CP",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/12/Logo_Sporting_Clube_Portugal.svg/langfr-800px-Logo_Sporting_Clube_Portugal.svg.png"
    },
    {
        id: "TK-21/22-01",
        name: "Besiktas JK",
        short_name: "Besiktas",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2d/Besiktas_Jimnastik_Kulubu_logo.svg/langfr-800px-Besiktas_Jimnastik_Kulubu_logo.svg.png"
    },
    {
        id: "MO-21/22-01",
        name: "FC Sheriff Tiraspol",
        short_name: "Sheriff Tiraspol",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/27/FC_Sheriff.svg/langfr-800px-FC_Sheriff.svg.png"
    },
    {
        id: "UK-21/22-01",
        name: "Chakhtar Donetsk",
        short_name: "Chakhtar Donetsk",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/57/FC_Shakhtar_Donetsk_%28logo%29.svg/langfr-800px-FC_Shakhtar_Donetsk_%28logo%29.svg.png"
    },
    {
        id: "PO-21/22-03",
        name: "Benfica Lisbone",
        short_name: "Benfica",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/SL_Benfica_logo.svg/langfr-1024px-SL_Benfica_logo.svg.png"
    },
    {
        id: "UK-21/22-02",
        name: "Dynamo Kiev",
        short_name: "Dynamo Kiev",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/langfr-800px-FC_Dynamo_Kyiv_logo.svg.png"
    },
    {
        id: "SW-21/22-01",
        name: "BSC Young Boys",
        short_name: "BSC Young Boys",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c2/BSC_Young_Boys.svg/langfr-1024px-BSC_Young_Boys.svg.png"
    },
    {
        id: "AU-21/22-01",
        name: "Red Bull Salzbourg",
        short_name: "RB Salzbourg",
        league: ["Champions League"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/be/Red_Bull_Salzburg_logo.svg/langfr-1280px-Red_Bull_Salzburg_logo.svg.png"
    },
    {
        id: "WC22-1",
        name: "Quatar",
        short_name: "Quatar",
        groupe: ["Groupe A"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/39/Football_Qatar_federation.svg/langfr-1024px-Football_Qatar_federation.svg.png",
    },
    {
        id: "WC22-2",
        name: "Equateur",
        short_name: "Equateur",
        groupe: ["Groupe A"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/FEF_logo.svg/langfr-800px-FEF_logo.svg.png",
    },
    {
        id: "WC22-3",
        name: "Sénégal",
        short_name: "Sénégal",
        groupe: ["Groupe A"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2f/Logo_F%C3%A9d%C3%A9ration_S%C3%A9n%C3%A9galaise_Football.svg/langfr-1024px-Logo_F%C3%A9d%C3%A9ration_S%C3%A9n%C3%A9galaise_Football.svg.png",
    },
    {
        id: "WC22-4",
        name: "Pays-Bas",
        short_name: "Pays-Bas",
        groupe: ["Groupe A"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/76/Logo_%C3%89quipe_Football_Pays_Bas.svg/langfr-800px-Logo_%C3%89quipe_Football_Pays_Bas.svg.png",
    },
    {
        id: "WC22-5",
        name: "Angleterre",
        short_name: "Angleterre",
        groupe: ["Groupe B"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Blason_%C3%89quipe_Angleterre_Football.svg/langfr-800px-Blason_%C3%89quipe_Angleterre_Football.svg.png",
    },
    {
        id: "WC22-6",
        name: "Etats-Unis",
        short_name: "Etats-Unis",
        groupe: ["Groupe B"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/6f/Logo_US_Soccer_Federation_-_2016.svg/langfr-800px-Logo_US_Soccer_Federation_-_2016.svg.png",
    },
    {
        id: "WC22-7",
        name: "Iran",
        short_name: "Iran",
        groupe: ["Groupe B"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/52/Logo_F%C3%A9d%C3%A9ration_Iran_Football.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Iran_Football.svg.png",
    },
    {
        id: "WC22-8",
        name: "Pays de Galles",
        short_name: "Pays de Galles",
        groupe: ["Groupe B"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dc/Logo_F%C3%A9d%C3%A9ration_Football_Pays_de_Galles_-_2019.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Football_Pays_de_Galles_-_2019.svg.png",
    },
    {
        id: "WC22-9",
        name: "Argentine",
        short_name: "Argentine",
        groupe: ["Groupe C"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Football_Argentine_federation.svg/langfr-800px-Football_Argentine_federation.svg.png",
    },
    {
        id: "WC22-10",
        name: "Arabie Saoudite",
        short_name: "Arabie Saoudite",
        groupe: ["Groupe C"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c2/Logo_F%C3%A9d%C3%A9ration_Arabie_Saoudite_Football.svg/langfr-1024px-Logo_F%C3%A9d%C3%A9ration_Arabie_Saoudite_Football.svg.png",
    },
    {
        id: "WC22-11",
        name: "Mexique",
        short_name: "Mexique",
        groupe: ["Groupe C"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/03/Logo_%C3%89quipe_Mexique_Football_-_2021.svg/langfr-800px-Logo_%C3%89quipe_Mexique_Football_-_2021.svg.png",
    },
    {
        id: "WC22-12",
        name: "Pologne",
        short_name: "Pologne",
        groupe: ["Groupe C"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Herb_Polski.svg/langfr-800px-Herb_Polski.svg.png",
    },
    {
        id: "WC22-13",
        name: "France",
        short_name: "France",
        groupe: ["Groupe D"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_%C3%89quipe_France_Football_2018.svg/langfr-800px-Logo_%C3%89quipe_France_Football_2018.svg.png",
    },
    {
        id: "WC22-14",
        name: "Australie",
        short_name: "Australie",
        groupe: ["Groupe D"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/73/Logo_Football_Federation_Australia_-_2021.svg/langfr-1920px-Logo_Football_Federation_Australia_-_2021.svg.png",
    },
    {
        id: "WC22-15",
        name: "Danemark",
        short_name: "Danemark",
        groupe: ["Groupe D"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Football_Danemark_federation.svg/langfr-1024px-Football_Danemark_federation.svg.png",
    },
    {
        id: "WC22-16",
        name: "Tunisie",
        short_name: "Tunisie",
        groupe: ["Groupe D"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/33/Logo_federation_tunisienne_de_football.svg/langfr-1024px-Logo_federation_tunisienne_de_football.svg.png",
    },
    {
        id: "WC22-17",
        name: "Espagne",
        short_name: "Espagne",
        groupe: ["Groupe E"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Logo_%C3%89quipe_Espagne_Football_-_2021.svg/langfr-800px-Logo_%C3%89quipe_Espagne_Football_-_2021.svg.png",
    },
    {
        id: "WC22-18",
        name: "Costa Rica",
        short_name: "Costa Rica",
        groupe: ["Groupe E"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/75/Logo_F%C3%A9d%C3%A9ration_Costa_Rica_Football_-_2021.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Costa_Rica_Football_-_2021.svg.png",
    },
    {
        id: "WC22-19",
        name: "Allemagne",
        short_name: "Allemagne",
        groupe: ["Groupe E"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e3/DFBEagle.svg/langfr-800px-DFBEagle.svg.png",
    },
    {
        id: "WC22-20",
        name: "Japon",
        short_name: "Japon",
        groupe: ["Groupe E"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/84/Japan_national_football_team_crest.svg/langfr-800px-Japan_national_football_team_crest.svg.png",
    },
    {
        id: "WC22-21",
        name: "Belgique",
        short_name: "Belgique",
        groupe: ["Groupe F"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Logo_F%C3%A9d%C3%A9ration_Belge_Football_2019.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Belge_Football_2019.svg.png",
    },
    {
        id: "WC22-22",
        name: "Canada",
        short_name: "Canada",
        groupe: ["Groupe F"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/19/Logo_Association_Canadienne_Soccer_-_2014.svg/langfr-1024px-Logo_Association_Canadienne_Soccer_-_2014.svg.png",
    },
    {
        id: "WC22-23",
        name: "Maroc",
        short_name: "Maroc",
        groupe: ["Groupe F"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/69/Logo_F%C3%A9d%C3%A9ration_Royale_Marocaine_Football.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Royale_Marocaine_Football.svg.png",
    },
    {
        id: "WC22-24",
        name: "Croatie",
        short_name: "Croatie",
        groupe: ["Groupe F"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/07/F%C3%A9d%C3%A9ration_de_Croatie_de_football_-_Logo.svg/langfr-800px-F%C3%A9d%C3%A9ration_de_Croatie_de_football_-_Logo.svg.png",
    },
    {
        id: "WC22-25",
        name: "Brésil",
        short_name: "Brésil",
        groupe: ["Groupe G"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/30/CBF_2019.svg/langfr-800px-CBF_2019.svg.png",
    },
    {
        id: "WC22-26",
        name: "Serbie",
        short_name: "Serbie",
        groupe: ["Groupe G"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/F%C3%A9d%C3%A9ration_de_Serbie_de_football.svg/langfr-800px-F%C3%A9d%C3%A9ration_de_Serbie_de_football.svg.png",
    },
    {
        id: "WC22-27",
        name: "Suisse",
        short_name: "Suisse",
        groupe: ["Groupe G"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Football_Suisse_federation.svg/langfr-1280px-Football_Suisse_federation.svg.png",
    },
    {
        id: "WC22-28",
        name: "Cameroun",
        short_name: "Cameroun",
        groupe: ["Groupe G"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Logo_F%C3%A9d%C3%A9ration_Camerounaise_Football.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Camerounaise_Football.svg.png",
    },
    {
        id: "WC22-29",
        name: "Portugal",
        short_name: "Portugal",
        groupe: ["Groupe H"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Football_Portugal_federation.svg/langfr-800px-Football_Portugal_federation.svg.png",
    },
    {
        id: "WC22-30",
        name: "Ghana",
        short_name: "Ghana",
        groupe: ["Groupe H"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/42/Football_Ghana_federation.svg/langfr-800px-Football_Ghana_federation.svg.png",
    },
    {
        id: "WC22-31",
        name: "Uruguay",
        short_name: "Uruguay",
        groupe: ["Groupe H"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e8/Association_uruguayenne_football.svg/langfr-800px-Association_uruguayenne_football.svg.png",
    },
    {
        id: "WC22-32",
        name: "Corée du Sud",
        short_name: "Corée du Sud",
        groupe: ["Groupe H"],
        league:["World Cup"],
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b0/Logo_F%C3%A9d%C3%A9ration_Cor%C3%A9e_Sud_Football.svg/langfr-800px-Logo_F%C3%A9d%C3%A9ration_Cor%C3%A9e_Sud_Football.svg.png",
    },
]

export default Teams