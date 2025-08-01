export namespace types {
	
	export enum UserPreferencesKeys {
	    IS_DARK_MODE_ACTIVE = "isDarkModeActive",
	}
	export class UserPreferences {
	    isDarkModeActive: boolean;
	
	    static createFrom(source: any = {}) {
	        return new UserPreferences(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.isDarkModeActive = source["isDarkModeActive"];
	    }
	}

}

