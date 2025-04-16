// src/data/testProvider.ts
export interface TestItem {
    id: string; 
    name: string;
    descriptions: {
        en: string;
        es?: string; 
    };
}

class TestProvider {
    private items: TestItem[] = [
        { id: 'item1', name: 'Test Item 1', descriptions: { en: 'Desc 1 EN', es: 'Desc 1 ES' } },
        { id: 'item2', name: 'Test Item 2', descriptions: { en: 'Desc 2 EN' } },
        { id: 'item3', name: 'Test Item 3', descriptions: { en: 'Desc 3 EN', es: 'Desc 3 ES' } },
    ];

    getAllEntries(): TestItem[] {
        return this.items;
    }

    getEntryById(id: string): TestItem | undefined { 
        return this.items.find(item => item.id === id);
    }

   
    getMeaning(item: TestItem, locale: string = 'en'): string {
        const langKey = locale as keyof TestItem['descriptions'];
        // Fallback logic: es -> en
        return item.descriptions[langKey] ?? item.descriptions.en;
    }
}

export const testProvider = new TestProvider();
