package com.kanjimaster;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.stetho.Stetho;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.rnfs.RNFSPackage; // <------- add package
import com.uphyca.stetho_realm.RealmInspectorModulesProvider;

import java.util.Arrays;
import java.util.List;

import io.realm.react.RealmReactPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new VectorIconsPackage(),
            new ReactNativeI18n(),
            new RNDeviceInfo(),
            new RNFSPackage(), // <---------- add package
            new ReactNativeConfigPackage(),
            new RealmReactPackage() // ADD THIS
      );
    }
  };

  @Override
  public void onCreate() {
    super.onCreate();

    Stetho.initialize(
        Stetho.newInitializerBuilder(this)
            .enableDumpapp(Stetho.defaultDumperPluginsProvider(this))
            .enableWebKitInspector(RealmInspectorModulesProvider.builder(this).build())
            .build());
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
