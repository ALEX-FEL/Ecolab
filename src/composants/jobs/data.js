// Jeu de données simple pour les offres d'emploi
// Adaptez les intitulés et descriptions selon vos besoins
export const jobs = [
	{
		id: "stage-gestion-comptabilite",
		title: "Offre de Stage : Assistant(e) Gestion et Comptabilité",
		location: "Mobile Essos, Temps partiel",
		category: "Stage",
		type: "Stage",
		duration: "4 à 6 mois",
		publishedAt: "oct. 2025",
		description: `Véritable pilier de la performance économique, notre département financier est le centre névralgique de l'entreprise. Nous recherchons un(e) stagiaire rigoureux(se) et curieux(se) pour soutenir notre équipe dans la gestion quotidienne et la clôture des exercices comptables. Si vous êtes passionné(e) par les chiffres, souhaitez comprendre les mécanismes financiers d'une entreprise et aspirez à une immersion concrète au cœur de la gestion, ce stage est fait pour vous.\nÀ propos de l'offre\n• Type : Stage\n• Durée : 4 à 6 mois\n• Localisation : Mobile Essos, Temps partiel\n• Environnement : Vous intégrerez une équipe de gestion expérimentée et bienveillante, où la rigueur et la collaboration sont essentielles.`,
		responsibilities: [
			"Saisie et enregistrement comptable (factures clients/fournisseurs, notes de frais)",
			"Gestion de la trésorerie (relances clients, préparation des paiements, rapprochements)",
			"Support à la clôture mensuelle et annuelle (inventaires, révision des comptes, états intermédiaires)",
			"Gestion administrative (dossiers du personnel, contrats, archivage)",
			"Analyse et reporting (tableaux de bord, suivi des budgets)"
		],
		requirements: [
			"Étudiant(e) ou Professionnel (Master CCA, DCG) ou équivalent en comptabilité/finance/gestion",
			"Rigueur, organisation, précision des données",
			"Curiosité et autonomie, esprit d'équipe",
			"Discrétion et intégrité",
			"Une première expérience en cabinet ou service administratif est un plus"
		],
		skills: {
			required: [
				"Connaissances solides en comptabilité générale",
				"Pack Office : Excel avancé (TCD, formules), Word, PowerPoint",
				"Rigueur et faible taux d'erreur",
				"Aisance avec les chiffres"
			],
			plus: [
				"Logiciels de gestion: Cegid, Sage, EBP ou ERP (SAP, Oracle)",
				"Notions fiscales/sociales (TVA, droit du travail)",
				"Outils collaboratifs (Teams, Slack, Trello)"
			]
		}
	},
	{
		id: "stage-marketing-communication",
		title: "Offre de Stage : Assistant(e) Marketing & Communication",
		location: "Mobile Essos (Présentiel ou Hybride)",
		category: "Stage",
		type: "Stage",
		duration: "4 à 6 mois",
		publishedAt: "oct. 2025",
		description: `Plongez au cœur de la stratégie marketing et communication d'une entreprise dynamique ! Nous recherchons un(e) stagiaire curieux(se) et créatif(ve) pour accompagner notre équipe dans le déploiement de ses actions et l'animation de nos communautés. Si vous êtes passionné(e) par les tendances digitales, aimez raconter des histoires et souhaitez acquérir une expérience concrète, ce stage est l'opportunité qu'il vous faut.\nÀ propos de l'offre\n• Type : Stage\n• Durée : 4 à 6 mois\n• Localisation : Mobile Essos (Présentiel ou Hybride)\n• Environnement : Vous intégrerez une équipe marketing pluridisciplinaire et passionnée.`,
		responsibilities: [
			"Gestion des réseaux sociaux (LinkedIn, Instagram, TikTok, etc.)",
			"Création de contenu (articles, newsletters, supports de communication)",
			"Suivi et analyse des performances (ROI, KPIs, analytics)",
			"Support aux actions marketing (événements, campagnes d'acquisition)",
			"Veille concurrentielle et sectorielle"
		],
		requirements: [
			"Étudiant(e) ou Professionnel en école de commerce/marketing/communication",
			"Forte appétence pour le digital et les réseaux sociaux",
			"Créativité, esprit d'équipe, autonomie",
			"Organisation et rigueur",
			"Excellentes capacités rédactionnelles en français"
		],
		skills: {
			required: [
				"Maîtrise des réseaux sociaux et bonnes pratiques",
				"Rédaction (adaptation du ton et du style)",
				"Pack Office / Canva (présentations), Excel basique",
				"Créativité pour contenu visuel et textuel"
			],
			plus: [
				"Outils de design (Adobe, Canva, Figma)",
				"Analyse web (Google Analytics), publicités en ligne",
				"Outils d'emailing (Mailchimp, Sendinblue, HubSpot)",
				"Notions SEO/SEA"
			]
		}
	},
	{
		id: "stage-developpeur-mobile-flutter",
		title: "Offre de Stage : Développeur(euse) Mobile Flutter",
		location: "Mobile Essos (Hybride)",
		category: "Stage",
		type: "Stage",
		duration: "4 à 6 mois",
		publishedAt: "oct. 2025",
		description: `Rejoignez une équipe innovante et participez à la création d'applications mobiles qui transforment l'expérience utilisateur ! Nous recherchons un(e) stagiaire passionné(e) et motivé(e) pour nous accompagner dans le développement de nos projets. Si vous êtes curieux(se), aimez apprendre et avez une appétence pour les technologies mobiles cross-plateforme, ce stage est fait pour vous.\nÀ propos de l'offre\n• Type : Stage\n• Durée : 4 à 6 mois\n• Localisation : Mobile Essos (Hybride)\n• Environnement : Équipe de développement agile et bienveillante.`,
		responsibilities: [
			"Développer des fonctionnalités (widgets, écrans) pour application Flutter",
			"Amélioration continue (corrections, performances)",
			"Intégration de services et d'API (REST)",
			"Participer aux revues de code",
			"Contribuer à la conception UI/UX (implémentation des maquettes)"
		],
		requirements: [
			"Étudiant(e) / Professionnel en dernière année d'école d'ingénieur ou master informatique",
			"Passion pour le développement mobile",
			"Curiosité, autonomie, esprit d'équipe",
			"Sens de l'initiative et force de proposition",
			"Première expérience projet (scolaire/personnelle) appréciée"
		],
		skills: {
			required: [
				"Flutter & Dart (première expérience)",
				"Concepts de base Flutter (widgets, state management, cycle de vie)",
				"Git (commits, branches, merges)",
				"POO"
			],
			plus: [
				"Architectures (BLoC, MVC, MVVM)",
				"Appels API REST et asynchronisme",
				"Outils de design (Figma)",
				"Notions de tests (unit/widget)"
			]
		}
	}
];


