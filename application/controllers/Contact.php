<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

	public function index() {
		$data['main'] = 'contact_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>