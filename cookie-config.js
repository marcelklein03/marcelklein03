// Wir warten, bis das HTML-Dokument vollständig geladen ist, bevor wir das Skript ausführen.
window.addEventListener('DOMContentLoaded', () => {

    // Konfiguration für den Cookie Consent Banner
    CookieConsent.run({
        current_lang: 'de',
        autodetect_lang: false,
        page_scripts: true,
        gui_options: {
            consent_modal: {
                layout: 'box',
                position: 'bottom right',
                transition: 'slide'
            },
            settings_modal: {
                layout: 'box',
                transition: 'slide'
            }
        },
        languages: {
            de: {
                translations: {
                    consent_modal: {
                        title: 'Wir verwenden Cookies!',
                        description: 'Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie allen Cookies gemäß unserer Cookie-Richtlinie zu. <a href="#link-zur-datenschutzerklaerung" class="cc-link">Mehr erfahren</a>',
                        primary_btn: {
                            text: 'Alle akzeptieren',
                            role: 'accept_all'
                        },
                        secondary_btn: {
                            text: 'Nur Notwendige',
                            role: 'accept_necessary'
                        }
                    },
                    settings_modal: {
                        title: 'Cookie-Einstellungen',
                        save_settings_btn: 'Einstellungen speichern',
                        accept_all_btn: 'Alle akzeptieren',
                        reject_all_btn: 'Alle ablehnen',
                        close_btn_label: 'Schließen',
                        blocks: [
                            {
                                title: 'Cookie-Nutzung 📢',
                                description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern.'
                            }, {
                                title: 'Notwendige Cookies',
                                description: 'Diese Cookies sind für das reibungslose Funktionieren unserer Website unerlässlich.',
                                toggle: {
                                    value: 'necessary',
                                    enabled: true,
                                    readonly: true
                                }
                            }, {
                                title: 'Analyse-Cookies',
                                description: 'Diese Cookies ermöglichen es uns, zu analysieren, wie Besucher unsere Website nutzen, um deren Leistung zu messen und zu verbessern.',
                                toggle: {
                                    value: 'analytics',
                                    enabled: false,
                                    readonly: false
                                }
                            }
                        ]
                    }
                }
            }
        },
        categories: {
            necessary: {
                enabled: true,
                readonly: true
            },
            analytics: {
                enabled: false,
                readonly: false
            }
        }
    });
});