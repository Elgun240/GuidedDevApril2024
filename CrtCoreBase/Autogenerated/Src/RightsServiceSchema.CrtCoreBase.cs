﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: RightsServiceSchema

	/// <exclude/>
	public class RightsServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public RightsServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public RightsServiceSchema(RightsServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("10bb4f79-5b92-47ce-b685-8e404e4984b9");
			Name = "RightsService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5af8fc1f-99e6-4265-b65c-5e9401c4c7dd");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,93,237,83,219,56,26,255,204,206,236,255,160,77,103,24,103,46,107,118,239,35,45,233,1,101,187,236,181,133,33,244,250,129,227,102,140,45,192,215,196,206,218,14,144,99,248,223,239,121,244,46,91,118,156,144,112,238,77,251,129,38,178,244,232,167,231,93,178,164,36,193,132,230,211,32,164,228,156,102,89,144,167,215,133,127,152,38,215,241,205,44,11,138,56,77,252,179,248,230,182,200,71,52,187,139,67,250,227,15,143,63,254,176,53,203,227,228,134,140,230,121,65,39,175,75,223,161,245,120,76,67,108,154,251,239,105,66,179,56,172,212,249,16,39,127,86,10,207,102,73,17,79,168,15,93,197,193,56,254,15,235,190,82,107,68,195,89,22,23,115,199,3,134,240,99,26,209,113,227,67,127,31,208,221,213,81,55,234,125,161,87,149,10,231,244,161,240,207,232,205,108,28,100,71,15,211,140,230,57,142,180,82,15,218,2,49,246,112,84,4,5,213,21,76,62,79,38,38,6,243,73,86,211,34,163,254,187,131,218,71,191,5,97,145,102,49,205,107,107,152,3,4,57,23,25,180,112,85,70,252,10,31,60,127,149,209,27,24,11,57,28,7,121,190,75,74,74,1,21,118,118,118,200,155,124,54,153,4,217,124,40,190,239,147,123,122,69,114,94,139,204,114,26,145,34,37,147,32,9,110,40,201,24,9,95,54,221,49,218,94,8,194,18,224,37,150,237,231,211,79,180,0,76,83,16,221,85,60,6,29,56,163,127,206,226,140,78,104,82,228,158,249,5,135,71,246,200,130,38,88,203,23,5,81,31,59,153,206,174,198,113,72,66,28,164,61,70,178,75,14,130,156,138,111,3,114,124,70,131,232,36,25,207,77,33,3,133,71,198,12,197,174,143,180,184,77,35,96,216,105,134,42,199,89,181,53,229,95,24,197,51,48,63,80,32,74,142,30,64,179,11,42,245,251,100,74,185,1,122,251,204,152,222,112,56,191,211,49,60,24,2,83,75,213,120,173,62,65,251,220,218,50,43,11,78,139,47,123,228,61,45,172,161,241,7,94,255,53,107,121,23,64,3,137,105,143,36,244,222,130,41,171,21,217,92,116,181,85,3,197,51,187,21,173,158,72,24,20,225,45,241,142,30,66,58,197,90,132,74,200,91,178,87,208,209,2,124,193,57,248,2,85,205,163,146,2,251,155,209,98,150,37,10,39,123,244,100,243,54,47,50,212,104,24,236,97,144,188,163,99,90,80,79,148,229,225,45,157,4,159,192,243,129,28,143,146,217,4,112,95,141,233,155,247,179,56,26,18,32,128,122,8,110,108,54,73,254,17,140,103,52,127,62,87,227,107,226,57,8,243,129,195,128,209,99,122,113,68,246,134,188,104,203,164,238,155,131,24,49,240,138,215,172,79,79,143,168,79,182,183,219,145,56,163,97,154,69,229,246,3,18,71,253,190,192,181,63,30,123,161,171,21,224,36,206,7,125,67,154,76,68,156,229,254,209,100,202,93,182,148,160,107,24,31,232,29,29,231,156,177,226,243,30,249,12,238,3,252,64,194,67,10,68,142,80,143,136,19,129,34,206,121,107,24,69,54,147,58,115,149,166,99,114,27,228,178,34,80,245,204,78,182,73,61,26,95,113,173,79,246,246,248,208,218,212,126,109,234,169,209,55,167,240,150,244,116,171,47,65,150,0,143,62,130,35,1,191,216,227,53,118,37,231,126,75,179,73,80,120,104,135,31,210,144,197,69,208,213,17,123,232,245,108,239,222,27,144,158,102,144,50,30,100,26,77,66,250,41,45,126,75,103,73,212,235,247,93,22,243,46,102,44,6,21,125,195,251,30,16,228,220,16,85,123,148,79,97,104,232,243,184,250,230,85,91,90,143,235,225,244,170,114,63,130,220,160,152,115,206,127,100,1,132,105,192,113,146,23,1,12,237,96,142,16,76,59,224,36,63,196,121,33,70,51,36,193,120,156,222,83,57,2,232,163,108,33,48,74,222,195,126,24,130,52,212,80,203,84,165,110,179,114,95,84,179,109,57,68,19,65,161,253,157,206,153,173,159,6,113,102,243,213,11,125,174,170,54,46,76,191,138,32,134,126,249,243,190,50,199,243,84,139,200,123,192,14,30,124,32,63,32,226,51,235,199,41,90,96,82,1,113,237,46,5,23,115,26,100,57,229,125,33,121,41,201,139,75,18,234,194,1,73,103,133,75,35,76,134,14,201,77,150,206,166,10,57,111,100,177,156,179,72,60,151,26,98,183,18,65,102,81,95,82,73,132,222,65,68,47,40,200,96,143,252,173,247,207,11,239,226,95,187,151,127,233,239,194,255,151,240,255,101,79,212,53,123,23,253,152,68,37,205,107,176,157,0,195,146,32,206,25,65,226,196,100,137,242,108,31,89,8,155,176,191,123,4,114,65,250,224,179,50,143,215,30,72,112,130,58,115,254,172,186,63,154,49,197,82,164,228,104,190,210,57,144,226,117,222,35,119,242,139,95,47,185,60,5,13,70,228,39,155,115,74,83,64,9,60,32,161,157,111,153,199,23,240,244,178,129,1,210,43,59,219,249,251,81,228,89,216,254,122,105,234,26,134,117,240,125,84,15,202,100,59,107,205,25,163,170,235,56,176,132,11,178,253,207,1,100,114,99,104,18,113,131,245,150,84,85,201,41,116,57,28,92,142,196,185,115,170,215,72,110,183,101,173,209,68,24,127,80,111,220,189,153,221,113,111,88,30,148,24,141,65,141,91,184,89,96,177,222,1,66,235,109,222,223,146,50,169,12,146,201,197,142,49,189,139,199,95,158,118,31,127,125,186,236,217,61,26,16,240,115,95,125,177,181,160,154,160,85,122,93,54,238,212,240,199,145,200,89,110,199,97,182,207,145,52,218,158,65,18,236,14,166,170,100,72,126,81,130,93,61,232,25,192,24,241,119,48,142,56,9,65,179,161,169,217,233,121,138,67,244,250,190,172,97,81,136,101,180,218,143,38,113,2,53,178,128,147,40,197,209,119,7,114,130,113,148,220,196,9,101,65,52,55,163,171,69,224,96,94,27,4,185,71,170,233,119,123,187,220,241,225,44,203,96,210,133,165,190,46,62,159,79,97,150,193,81,226,103,127,52,58,213,94,76,104,145,59,255,168,224,121,50,185,161,178,179,10,67,28,105,49,210,93,148,87,27,131,174,31,115,109,191,122,76,27,72,114,56,209,4,181,4,179,12,160,107,103,38,254,151,91,154,81,158,146,216,106,92,74,52,172,228,197,147,161,68,166,41,161,111,76,93,176,72,84,232,43,24,202,25,217,129,148,55,183,138,20,141,62,122,43,5,221,8,96,110,135,101,18,180,4,121,120,75,195,175,150,138,88,179,129,114,175,229,184,39,254,179,194,24,51,204,32,225,212,144,46,48,182,65,223,107,101,95,225,78,133,57,165,76,67,187,128,165,248,97,97,117,15,176,173,115,102,75,24,52,137,248,42,70,237,146,70,90,80,68,201,159,151,23,128,88,193,25,235,42,39,1,70,37,174,197,36,189,38,197,45,133,186,148,146,48,163,215,123,61,211,123,246,118,134,164,64,79,160,104,154,43,67,16,52,68,167,196,114,185,117,62,86,240,79,140,152,45,94,241,53,178,57,26,150,189,166,194,230,88,96,19,32,158,25,86,217,207,110,102,184,78,228,245,102,150,153,66,112,180,237,214,158,78,45,230,27,91,100,106,96,218,43,249,111,128,31,213,87,93,206,30,85,106,155,53,136,249,149,232,7,126,181,21,41,87,34,127,140,78,62,13,200,43,55,229,87,53,130,97,37,156,207,249,240,208,69,210,175,64,182,70,228,128,178,43,27,136,188,153,252,92,197,109,124,28,200,234,71,15,98,50,45,27,200,10,156,45,146,218,30,185,14,208,224,223,236,72,220,72,224,66,153,177,185,252,184,117,241,133,94,29,39,119,233,87,234,113,73,66,243,222,233,201,232,28,213,33,139,207,233,100,138,249,40,150,74,95,116,120,27,36,55,148,249,2,69,243,125,22,36,5,133,153,58,211,203,131,52,154,143,138,249,24,155,1,125,129,90,149,250,95,178,96,10,105,228,128,224,42,37,205,11,158,168,89,149,121,145,255,71,158,38,156,166,92,169,107,174,203,150,59,229,122,167,112,72,45,112,123,206,89,254,109,187,84,71,174,134,216,30,187,177,55,211,176,156,182,194,168,144,251,91,16,9,32,64,191,130,198,138,190,144,132,140,48,1,143,193,164,77,217,250,42,90,226,13,167,222,70,145,113,233,83,47,135,222,199,197,45,126,155,141,11,127,179,74,115,202,65,31,73,204,74,109,200,50,122,35,180,102,211,234,99,45,99,183,26,71,217,49,215,174,125,219,169,244,208,29,243,23,116,181,88,137,76,47,66,108,159,242,210,30,116,26,100,193,132,37,68,123,189,192,178,137,227,168,55,60,142,20,153,55,59,172,106,67,203,207,73,92,28,71,121,111,40,0,24,141,217,191,157,197,116,192,140,132,104,20,149,87,245,8,190,123,127,44,29,209,162,198,229,147,182,238,94,24,98,27,155,37,171,187,251,58,160,30,190,7,33,101,229,27,16,44,190,184,36,166,110,241,121,50,209,106,178,190,240,80,139,174,10,204,70,100,128,89,104,248,208,73,190,90,128,48,173,68,16,224,243,182,207,104,167,194,23,201,137,222,44,137,65,150,36,142,32,155,140,175,99,24,221,18,214,171,95,80,201,204,153,61,71,162,133,65,50,111,109,200,224,49,197,88,129,34,204,27,211,162,10,231,229,227,31,136,162,198,131,231,223,64,212,107,64,207,205,169,172,35,174,55,143,150,30,243,105,91,141,121,45,25,54,57,45,43,118,54,1,174,98,173,181,176,229,98,107,7,99,172,48,117,52,90,71,48,146,4,155,237,117,154,230,49,155,24,14,109,20,164,153,196,247,112,217,20,46,79,37,83,151,51,254,23,154,42,45,66,205,141,94,41,215,128,196,73,65,164,158,108,62,72,42,24,6,2,213,251,51,163,162,34,212,129,240,216,27,238,187,98,97,75,107,253,68,239,213,96,200,29,174,13,118,59,16,174,104,18,221,138,135,182,133,84,67,141,78,62,185,136,221,166,179,201,0,168,16,54,198,65,195,160,218,6,193,74,244,251,95,4,188,140,237,211,113,204,11,37,173,239,113,202,105,150,124,91,207,183,179,152,215,128,215,19,51,57,165,10,235,11,72,77,189,234,238,22,218,203,25,157,164,119,84,108,5,203,201,53,76,83,42,241,168,3,225,103,137,217,89,23,34,11,23,78,253,44,171,235,65,165,25,255,106,243,172,245,5,148,5,232,154,39,85,203,197,144,170,175,93,214,251,183,95,74,196,191,122,110,212,174,77,152,70,188,77,187,234,17,205,195,44,158,26,83,168,198,166,223,227,17,150,126,158,230,52,43,101,255,157,91,98,116,129,228,118,42,21,113,64,248,86,86,166,10,234,11,42,144,250,98,168,199,250,2,149,19,153,6,149,136,93,3,8,195,236,127,161,149,114,47,144,147,84,237,5,80,166,41,223,133,163,154,254,44,247,25,133,124,15,6,142,83,207,180,132,255,95,62,163,219,207,178,96,142,129,72,117,15,217,93,67,236,49,160,64,236,2,217,10,56,57,30,218,96,135,112,104,68,210,171,127,211,176,224,145,9,98,217,56,202,29,38,19,39,81,28,6,56,242,92,148,1,138,9,215,97,53,48,167,237,208,44,131,240,62,193,239,57,110,63,191,46,155,206,134,226,96,199,77,199,5,242,133,19,183,154,140,237,249,2,80,91,247,29,123,232,187,35,136,134,35,10,77,3,168,223,25,207,142,214,44,179,55,80,30,115,41,111,83,175,239,186,180,53,108,253,18,227,122,194,49,119,71,84,250,176,79,21,229,26,229,129,155,255,86,62,152,243,255,125,50,166,85,69,205,69,163,207,50,95,234,79,198,56,78,128,245,202,71,91,54,164,246,71,81,92,116,93,233,53,198,245,187,160,159,28,106,143,253,45,60,141,214,116,210,137,236,86,141,96,253,162,211,251,27,187,43,58,141,241,187,232,44,209,169,35,138,157,204,13,202,248,114,82,11,221,117,100,65,30,101,170,156,11,221,76,194,80,133,100,96,193,189,175,152,93,58,78,169,246,215,159,75,168,136,208,29,137,182,60,47,188,80,102,250,204,130,65,199,102,52,100,240,143,141,12,39,79,27,100,57,87,131,78,58,195,50,70,151,0,196,20,168,225,148,246,34,9,184,154,182,88,145,230,147,119,138,238,78,66,134,76,70,172,33,227,126,211,43,92,251,141,112,194,156,17,10,14,150,70,62,57,193,109,169,247,49,91,225,21,4,216,116,183,160,15,133,244,160,45,167,249,122,8,189,33,55,104,246,96,193,214,132,202,88,85,227,56,106,110,26,231,159,232,61,127,73,138,3,122,96,135,18,164,44,216,137,82,90,187,174,112,180,126,46,173,123,17,64,7,194,142,90,2,66,171,51,0,135,14,139,173,120,76,106,102,252,88,243,89,163,165,67,210,75,78,103,248,225,44,131,1,106,255,212,62,136,47,137,150,157,222,240,86,45,166,55,188,162,113,68,204,145,115,241,58,11,103,137,156,70,233,4,92,117,174,88,62,115,43,42,122,106,172,162,124,235,237,170,23,9,112,5,49,110,17,248,148,50,180,64,199,7,45,161,89,209,235,15,212,73,179,128,215,225,241,75,246,189,225,75,12,92,7,79,213,134,57,176,158,131,249,170,243,90,108,221,66,236,88,237,117,165,91,251,162,12,215,121,195,114,173,234,37,28,142,164,160,113,9,162,85,66,191,189,237,130,216,118,93,130,29,247,108,223,126,157,234,246,121,26,129,215,174,85,55,199,186,128,87,85,129,141,24,194,2,100,156,49,47,98,6,109,146,151,80,93,205,37,94,49,176,55,235,236,80,34,135,175,95,86,180,136,224,27,202,110,242,222,80,95,33,38,251,101,39,68,235,223,99,200,1,70,234,32,119,221,0,7,120,86,40,163,120,45,135,58,39,43,222,246,48,145,65,33,79,241,176,221,11,37,33,251,81,212,107,251,34,125,149,180,194,113,188,93,30,148,87,0,244,45,32,134,36,74,25,181,241,228,173,113,10,157,43,185,60,59,140,188,108,188,251,68,94,61,193,153,110,228,58,137,74,111,184,243,17,161,125,201,235,79,200,219,183,117,103,250,237,75,47,214,60,185,98,171,111,93,155,90,25,76,64,190,218,23,43,24,136,87,155,104,241,171,194,24,1,189,246,72,42,87,42,24,61,123,171,102,145,214,53,23,85,72,120,128,186,1,232,86,5,37,59,60,237,74,162,215,21,173,221,215,149,149,80,108,66,15,217,82,226,55,165,135,6,226,103,235,97,211,213,30,221,209,195,210,33,254,150,122,168,111,169,88,143,30,186,111,101,89,139,30,26,0,59,164,133,236,138,24,3,26,83,64,19,170,84,191,2,211,50,107,189,79,190,9,95,247,202,172,213,187,209,173,234,111,189,162,25,89,61,118,71,50,108,77,195,6,231,85,55,130,215,47,199,6,230,125,27,103,114,23,15,159,182,36,133,222,13,195,55,147,235,153,224,202,226,228,123,152,240,249,113,101,142,87,26,135,61,4,3,187,27,180,9,214,0,90,213,162,227,104,189,186,177,63,157,142,231,252,40,117,135,108,150,93,89,103,66,243,12,222,170,173,48,92,82,216,1,155,116,103,214,196,116,121,91,53,165,105,245,109,247,38,186,89,187,247,196,149,176,110,122,80,12,158,192,116,7,70,233,58,241,246,133,102,91,173,117,165,76,209,171,11,129,174,27,171,204,197,203,202,107,45,54,131,96,183,28,122,28,77,127,80,73,40,196,115,133,197,182,47,76,28,196,80,31,137,231,121,224,52,250,6,196,109,194,74,106,222,1,250,234,70,2,21,96,217,82,210,178,109,196,9,208,213,187,87,121,230,18,221,235,54,207,238,222,216,131,179,4,0,171,213,211,38,76,235,29,77,230,221,181,46,226,6,89,191,45,64,168,236,115,87,247,125,71,167,27,202,61,140,99,108,29,97,60,11,50,21,124,75,189,124,113,29,82,3,138,135,179,188,72,39,101,186,141,41,251,128,244,20,175,7,50,45,232,213,156,223,92,139,88,92,32,187,39,28,55,43,43,9,123,173,132,68,85,118,51,231,20,62,25,87,224,186,197,247,188,188,161,14,177,1,213,133,210,13,111,67,178,23,235,27,252,204,11,119,25,198,134,104,54,166,142,28,106,147,174,177,22,174,212,4,106,23,31,178,29,252,214,179,81,75,23,234,202,59,234,187,47,211,30,184,144,108,82,124,29,220,201,94,21,90,69,92,106,178,243,28,89,104,170,154,220,75,112,186,67,169,195,241,130,75,116,43,208,245,122,191,62,169,98,58,190,232,202,230,248,226,188,92,175,168,25,111,97,86,184,73,89,31,93,137,19,7,56,121,45,103,121,68,68,156,22,17,239,132,141,223,167,216,114,215,46,143,176,165,78,25,63,98,161,218,203,151,115,253,5,93,154,0,197,189,156,154,87,108,41,208,152,252,59,72,184,22,243,52,129,181,171,252,239,108,147,54,5,77,236,142,162,75,159,162,177,73,87,50,230,95,23,59,118,107,103,9,208,81,172,146,4,77,74,155,122,85,36,110,145,237,14,99,23,57,16,141,185,126,91,164,253,27,2,142,155,183,155,94,19,57,61,195,153,153,127,173,182,82,191,232,182,93,101,180,21,140,237,110,28,214,156,113,220,56,108,94,54,236,186,124,215,253,46,168,241,37,126,134,55,17,3,128,73,204,127,122,138,189,226,22,228,54,186,151,208,224,89,111,136,107,233,120,196,79,118,92,251,106,254,84,33,229,87,172,144,171,185,188,167,94,116,185,137,87,234,198,77,225,223,140,137,53,254,186,74,107,19,91,250,114,251,202,239,129,172,252,51,32,230,47,50,200,107,178,23,254,38,8,7,225,188,221,250,12,23,132,188,133,63,253,208,208,123,127,37,242,130,174,197,124,11,179,189,90,216,248,35,7,107,184,24,54,157,206,187,182,82,197,230,228,26,88,237,74,73,158,206,178,144,170,107,125,138,32,187,161,236,61,136,110,43,64,158,176,4,10,207,77,243,255,65,119,103,227,213,223,207,104,50,242,147,216,22,82,215,177,249,70,56,84,117,78,52,26,171,173,106,36,99,199,201,29,205,238,33,23,164,186,71,95,149,113,239,239,88,35,96,4,173,85,62,83,229,20,239,52,219,42,200,154,110,30,231,165,165,194,210,239,248,213,177,131,213,189,120,23,20,129,169,182,214,207,227,213,55,45,255,8,222,105,134,105,109,17,211,210,229,231,140,254,71,58,185,2,185,177,192,12,218,158,74,166,245,170,105,159,102,242,35,1,134,188,38,57,254,121,130,102,184,81,232,117,107,38,60,253,23,70,18,223,227,245,114,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("10bb4f79-5b92-47ce-b685-8e404e4984b9"));
		}

		#endregion

	}

	#endregion

}

