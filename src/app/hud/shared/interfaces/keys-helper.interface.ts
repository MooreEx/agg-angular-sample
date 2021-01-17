export type KeysHelperData = {
  toggleKeyName: string;
  keyHelpers: KeyHelper[];
}

type KeyHelper = {
  iconName: string; // из app/ui/material/material.service
  keyName: string;
}
