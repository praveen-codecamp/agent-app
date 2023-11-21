import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next).init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    id: 'Id',
                    title: 'Title',
                    actions: 'Actions',
                    logout: 'Log Out',
                    category: 'Category',
                    account: 'Account',
                    demo: 'Demo Project',
                    amount: 'Amount Menge Montante',
                    date: 'Date Datum ',
                    verified: 'Verified Verifiziert',
                    status: 'Status Statut',
                    dashboard: 'Dashboard',
                    contracts: 'Contracts',
                    pendingContracts: 'Pending Contracts',
                    welcomeNote: 'Hi, Welcome back',
                    firstName: 'First Name',
                    address1: 'Address Line 1',
                    address2: 'Address Line 2',
                    longitude: 'Longitude',
                    latitude: 'Latitude',
                    contractAmount: 'Contract Amount',
                    save: 'Save',
                    back: 'Back',
                    cancel: 'Cancel',
                    updateSuccessful: 'Changes are updated successfully'
                }
            },
            de: {
                translation: {
                    id: 'Ausweis',
                    title: 'Titel',
                    actions: 'Aktionen',
                    logout: 'Ausloggen',
                    category: 'Kategorie',
                    account: 'Konto',
                    demo: 'Demoprojekt',
                    amount: 'Menge',
                    date: 'Datum ',
                    verified: 'Verifiziert',
                    status: 'Status',
                    dashboard: 'Armaturenbrett',
                    contracts: 'Verträge',
                    pendingContracts: 'Ausstehende Verträge',
                    welcomeNote: 'Hallo, Willkommen zurück',
                    firstName: 'Vorname',
                    address1: 'Anschrift Zeile 1',
                    address2: 'Adresszeile 2',
                    longitude: 'Längengrad',
                    latitude: 'Breite',
                    contractAmount: 'Vertragssumme',
                    save: 'Speichern',
                    back: 'Zurück',
                    cancel: 'Stornieren',
                    updatedSuccessful: 'Änderungen wurden erfolgreich aktualisiert'
                }
            },
            fr: {
                translation: {
                    id: 'IDENTIFIANT',
                    title: 'Titre',
                    actions: 'Actions',
                    logout: 'Se déconnecter',
                    category: 'Catégorie',
                    account: 'Compte',
                    demo: 'Projet de démonstration',
                    amount: 'Montante',
                    date: 'Date',
                    verified: 'Vérifié',
                    status: 'Statut',
                    dashboard: 'Tableau de bord',
                    contracts: 'Contrats',
                    pendingContracts: 'Contrats en attente',
                    welcomeNote: 'Bonjour, bon retour',
                    firstName: 'Prénom',
                    address1: 'Adresse Ligne 1',
                    address2: 'Adresse Ligne 2',
                    longitude: 'Longitude',
                    latitude: 'Latitude',
                    contractAmount: 'Montant du contrat',
                    save: 'Sauvegarder',
                    back: 'Dos',
                    cancel: 'Annuler',
                    updatedSuccessful: 'Les modifications sont mises à jour avec succès'
                }
            },
        },
    });

export default i18n;