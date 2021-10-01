import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

class UserPermissions {
    getCameraPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)

            if (status != "granted") {
                alert("O app precisa da permissão da câmera")
            }

        }
    }
}

export default new UserPermissions();