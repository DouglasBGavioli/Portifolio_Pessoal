'use client';

import { useEffect, useRef, useState } from 'react';
import { HiOutlineTranslate } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';

export default function LanguageButton() {
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<'pt' | 'en'>('pt');
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);
    const pollingRef = useRef<number | null>(null);

    useEffect(() => {
        if (!document.querySelector('#google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
        }

        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: 'pt',
                    includedLanguages: 'pt,en',
                    autoDisplay: false,
                },
                'google_translate_element'
            );
            startPollingSelect();
        };

        startPollingSelect();

        return () => {
            if (pollingRef.current) clearInterval(pollingRef.current);
        };
    }, []);

    function startPollingSelect() {
        if (pollingRef.current) return;
        pollingRef.current = window.setInterval(() => {
            const sel = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
            if (sel) {
                selectRef.current = sel;
                clearInterval(pollingRef.current!);
                pollingRef.current = null;
                sel.style.opacity = '0';
                sel.style.position = 'absolute';
                sel.style.left = '-9999px';
            }
        }, 300);
    }

    const triggerSelectChange = (select: HTMLSelectElement, value: string) => {
        select.value = value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        try {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', true, true);
            select.dispatchEvent(evt);
        } catch { }
    };

    const handleTranslate = (lang: 'pt' | 'en') => {
        const sel = selectRef.current ?? (document.querySelector('.goog-te-combo') as HTMLSelectElement | null);
        if (sel) {
            triggerSelectChange(sel, lang);
            setCurrentLang(lang);
            setOpen(false);
        }
    };

    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, []);

    return (
        <div ref={wrapperRef} className="relative inline-block">
            <div
                id="google_translate_element"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', top: 0, width: 1, height: 1, overflow: 'hidden' }}
            />

            <button
                onClick={() => setOpen((s) => !s)}
                className="flex items-center gap-1 bg-yellow-500 text-white p-1 pl-2 rounded-full shadow-md hover:bg-yellow-600 active:scale-95 transition"
                aria-label="Selecionar idioma"
            >
                <HiOutlineTranslate size={18} />
                <HiChevronDown size={16} className={`${open ? 'rotate-180' : ''} transition-transform`} />
            </button>

            {open && (
                <div className="absolute top-full mt-2 right-0 bg-yellow-500 text-white shadow-lg rounded-md overflow-hidden text-sm z-50">
                    <button
                        onClick={() => handleTranslate('pt')}
                        className={`flex items-center gap-2 px-4 py-2 hover:bg-yellow-600 w-full text-left ${currentLang === 'pt' ? 'bg-yellow-600' : ''
                            }`}
                    >
                        Português
                    </button>
                    <button
                        onClick={() => handleTranslate('en')}
                        className={`flex items-center gap-2 px-4 py-2 hover:bg-yellow-600 w-full text-left ${currentLang === 'en' ? 'bg-yellow-600' : ''
                            }`}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
}
