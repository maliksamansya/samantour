
import { defineStore } from 'pinia'
import axios from 'axios'
export const useTourStore = defineStore('tour', {
    state: () => ({
        // baseUrl: 'https://samantour.maliksamansya.site',
        baseUrl: 'http://localhost:3000',


        // TODO get all tour
        listTour: [],
        totalTour: '',
        currentPage: 1,
        pageSize: 8,
        filter: '',
        // TODO tour by id
        productDetail: '',
        tourDetail: '',
        qrCode: '',
        // TODO Booking
        bookings: [],


    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        // TODO Alert SweetAlert Loading
        showLoading(time) {
            Swal.fire({
                title: 'Please Wait !',
                html: 'Process...', // add html attribute if you want or remove
                allowOutsideClick: false,
                showConfirmButton: false,
                timer: time,
                willOpen: () => {
                    Swal.showLoading()
                }
            })
        },
        // TODO wait
        wait(ms) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(ms)
                }, ms)
            })
        },

        // TODO Alert Succes
        succesAlert(msg) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: msg,
                showConfirmButton: false,
                timer: 1100
            })
        },

        // TODO Alert Error
        alertError(msg) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg
            })
        },
        // TODO home
        backToHome() {
            this.router.push('/')
        },
        // TODO Register
        openFormRegister() {
            this.router.push('/register')
        },

        async register(value) {
            try {
                const { data } = await axios({
                    url: this.baseUrl + '/users/register',
                    method: 'post',
                    data: value
                })
                console.log(data);
                this.router.push('/login')
            } catch (error) {
                console.log(error);
                if (error.response) {
                    this.alertError(error.response.data.msg)
                } else {
                    this.alertError(error.message)
                }
            }

        },
        // TODO Login
        openFormLogin() {
            console.log('form login terbuka');
            this.router.push('/login')
        },
        async login(value) {
            console.log(value);
            this.showLoading(1500)
            try {
                const { data } = await axios({
                    url: this.baseUrl + '/users/login',
                    method: 'post',
                    data: value
                })
                localStorage.accest_token = data.accest_token
                console.log(data);
                await this.wait(1700)
                this.router.push('/')
                this.succesAlert('Login Success!')
            } catch (error) {
                console.log(error);
                if (error.response) {
                    this.alertError(error.response.data.msg)
                } else {
                    this.alertError(error.message)
                }
            }
        },
        async logOut() {
            // this.showLoading(1500)
            // localStorage.clear()
            // await this.wait(1700)
            // this.router.push('/login')
            // this.succesAlert('Log out Success!')
            localStorage.clear()
            this.router.push('/login')
        },
        // TODO Products
        async getAllTour() {
            try {
                const { data } = await axios({
                    url: this.baseUrl + '/tours',
                    params: {
                        page: this.currentPage,
                        pageSize: this.pageSize,
                        filter: this.filter,
                    },
                    method: 'get'
                })
                console.log(data);
                this.listTour = data.tours
                this.totalTour = data.totalTour

            } catch (error) {
                console.log(error);
            }

        },

        async detailTour(id) {

            try {
                const { data } = await axios({
                    url: this.baseUrl + `/tours/${id}`,
                    method: 'get'
                })
                console.log(data);
                this.tourDetail = data.tour
                this.qrCode = data.data
                // ini sementara dulu
                // this.qrCode = `<p>SEMENTARA DULU</p>`

                // this.showLoading(1500)
                // await this.wait(1500)
                this.router.push(`/tours/${id}`)
            } catch (error) {
                console.log(error);
            }
        },
        // TODO pagination and filter
        next() {
            this.currentPage++
        },
        previous() {
            this.currentPage--
        },

        // TODO create new booking
        async creteBooking(id) {
            try {
                await axios({
                    url: this.baseUrl + `/bookings/${id}`,
                    method: 'post',
                    headers: {
                        accest_token: localStorage.accest_token
                    },
                    data: {
                        price: this.tourDetail.price,
                        paid: true
                    }
                })
                // console.log('masuk ke page my bookings');
                this.router.push('/bookings')
            } catch (error) {
                console.log(error);
                if (error.response) {
                    this.alertError(error.response.data.msg)
                    // this.alertError('Login first!')

                } else {
                    this.alertError(error.message)
                }
            }
        },

        // TODO payment 
        async bookTour(id) {
            // console.log(id);
            try {

                // this.router.push(`/payment/${id}`)
                const { data } = await axios({
                    url: this.baseUrl + '/generate-midtrans-token',
                    method: 'post',
                    headers: {
                        accest_token: localStorage.accest_token
                    },
                    data: {
                        price: this.tourDetail.price,
                    }
                })
                console.log(data);
                let cb = this.creteBooking
                window.snap.pay(data.token, {
                    onSuccess: function () {
                        /* You may add your own implementation here */
                        console.log('Succes bayar bos');
                        cb(id)
                    },

                })
            } catch (error) {
                console.log(error);
                if (error.response) {
                    // this.alertError(error.response.data.msg)
                    this.alertError('Login first!')

                } else {
                    this.alertError(error.message)
                }
            }

        },

        // TODO Get MyBooking by tour id
        async getMyBooking() {
            // this.showLoading(1500)
            try {
                const { data } = await axios({
                    url: this.baseUrl + '/bookings',
                    method: 'get',
                    headers: {
                        accest_token: localStorage.accest_token
                    }
                })
                console.log(data);
                this.bookings = data.bookings

                this.router.push('/bookings')
            } catch (error) {
                console.log(error);
            }
        },

        // TODO Google sign in
        async callback(response) {
            this.showLoading(1500)
            try {
                const data = await axios({
                    url: this.baseUrl + '/users/google-sign-in',
                    method: 'post',
                    headers: {
                        google_token: response.credential
                    }
                })
                localStorage.accest_token = data.data.accest_token
                await this.wait(1700)
                this.router.push('/')
                this.succesAlert('Login Success!')

            } catch (error) {
                console.log(error)
            }
        },
        // TODO get geolocation API
        async locate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.getAddres(position.coords.latitude, position.coords.longitude)
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                    },
                    error => {
                        console.log(error.message);
                    }
                )
            } else {
                console.log('errrorrr');
            }
        },

        // TODO Geocoding
        async getAddres(lat, long) {
            try {
                const { data } = await axios({
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyDrVKrHpyMw79ykNqvFK8Tn8qIPDpGEaAo',
                    method: 'get'
                })
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }

    },
})