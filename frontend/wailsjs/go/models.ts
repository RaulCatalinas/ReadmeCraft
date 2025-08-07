export namespace types {
	
	export enum UserPreferencesKeys {
	    IS_DARK_MODE_ACTIVE = "isDarkModeActive",
	}
	export enum LogLevel {
	    DEBUG = "DEBUG",
	    INFO = "INFO",
	    WARNING = "WARNING",
	    ERROR = "ERROR",
	    FATAL = "FATAL",
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

