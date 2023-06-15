import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC, SetStateAction, useState }  from 'react';
import { useTranslation } from 'react-i18next';

interface ISetting {
  lang: string;
  setLang: React.Dispatch<SetStateAction<string>>;
}

const Settings: FC<ISetting> = ({ lang, setLang }) => {
  const { t, i18n } = useTranslation();

  const languages = [
    {value: 'en', title: 'English'},
    {value: 'ru', title: 'Русский'},
  ];

  const onChangeLang = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <View style={{width: '100%'}}>
      <View style={styles.pageTitleBox}>
        <Text style={styles.pageTitle}>{t('Settings Title')}</Text>
      </View>
      {languages.map(item => (
        <TouchableOpacity key={item.value} style={styles.langButton} onPress={() => onChangeLang(item.value)}>
          <Text
            style={{
              ...styles.langTitle,
              color: lang === item.value ? '#AE54F0' : '#000000'
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  pageTitleBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  langButton: {
    width: '100%',
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  },
  langTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Settings